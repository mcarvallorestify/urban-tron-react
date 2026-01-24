import React, { useEffect, useState } from 'react';
// import { createClient } from '@supabase/supabase-js';
import img1 from '/src/images/1.jpeg';
import img2 from '/src/images/2.jpeg';
import img3 from '/src/images/3.jpeg';
import img4 from '/src/images/4.jpeg';
import img5 from '/src/images/5.jpeg';
import img6 from '/src/images/6.jpeg';

// const supabaseUrl = 'https://btbdasehtcqffyoscgzp.supabase.co'; // Reemplaza con tu URL
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0YmRhc2VodGNxZmZ5b3NjZ3pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5ODY2OTQsImV4cCI6MjA1NTU2MjY5NH0.Yz10xEXTbLYvdtvMyx4sWKSLZDZE7nC21AVImgo0Pzc'; // Reemplaza con tu key
// const supabase = createClient(supabaseUrl, supabaseKey);

const MobileCarousel = () => {
  // const [images, setImages] = useState<string[]>([]);
  const images = [img1, img2, img3, img4, img5, img6];
  const [current, setCurrent] = useState(0);
  const [height, setHeight] = useState<number>(window.innerHeight * 0.9);

  // useEffect(() => {
  //   // Solo cargar en móvil
  //   if (window.innerWidth > 768) return;
  //   supabase
  //     .from('inicioWeb')
  //     .select('carruselMovil')
  //     .then(({ data }) => {
  //       if (data && data.length > 0) {
  //         setImages(data.map((row: any) => row.carruselMovil).flat());
  //       }
  //     });
  //   // Actualizar altura si cambia el tamaño de la pantalla
  //   const handleResize = () => setHeight(window.innerHeight * 0.9);
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

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
