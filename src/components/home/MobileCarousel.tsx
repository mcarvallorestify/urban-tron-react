import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

const EMPRESA_ID = 70;

const getString = (value: unknown) => (typeof value === 'string' ? value : '');

const MobileCarousel = () => {
  const [images, setImages] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);
  const [height, setHeight] = useState<number>(() =>
    typeof window !== 'undefined' ? window.innerHeight * 0.9 : 600
  );

  useEffect(() => {
    const fetchEventImages = async () => {
      const { data, error } = await supabase
        .from('eventos')
        .select('id, img, img_promocional')
        .eq('empresa', EMPRESA_ID)
        .order('id', { ascending: false });

      if (error || !data) {
        setImages([]);
        return;
      }

      const mappedImages = data
        .map((row) => getString(row.img) || getString(row.img_promocional))
        .filter((url): url is string => Boolean(url));

      setImages(mappedImages);
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

  if (window.innerWidth > 768 || images.length === 0) return null;

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
