import { useEffect, useState } from 'react';
import { EMPRESA_ID, fetchPublicEmpresaVitrina } from '@/lib/publicVitrina';

const MobileCarousel = () => {
  const [images, setImages] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);
  const [height, setHeight] = useState<number>(() =>
    typeof window !== 'undefined' ? window.innerHeight * 0.9 : 600
  );

  useEffect(() => {
    const fetchEventImages = async () => {
      try {
        const data = await fetchPublicEmpresaVitrina(EMPRESA_ID);
        const mappedImages = [...data.eventos]
          .sort((a, b) => a.id - b.id)
          .map((evento) => evento.img || evento.img_promocional || '')
          .filter(Boolean);

        setImages(mappedImages);
      } catch {
        setImages([]);
      }
    };

    fetchEventImages();

    const handleResize = () => setHeight(window.innerHeight * 0.9);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images]);

  if (typeof window !== 'undefined' && (window.innerWidth > 768 || images.length === 0)) {
    return null;
  }

  if (images.length === 0) return null;

  return (
    <div
      className="w-full flex justify-center items-center py-0 bg-background"
      style={{ height: `${height}px` }}
    >
      <div className="relative w-full h-full rounded-none overflow-hidden shadow-lg">
        <img
          src={images[current]}
          alt={`Carrusel ${current + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default MobileCarousel;
