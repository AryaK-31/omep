import React, { useState, useEffect } from 'react';

export default function Banner({ heading, message }) {
  const specializeItems = ["Pipe Bending", "Copper Piping", "HPS Piping"];

  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % specializeItems.length);
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <div className='p-12'>
          <h1 className='mt-8 text-5xl lg:text-6xl font-bold'>{heading}</h1>
          <p className='py-5 text-xl lg:text-2xl'>{message}</p>
          <button className='lg:text-xl px-8 py-2 font-medium border hover:bg-white hover:text-black transition-colors duration-300'>Xplore</button>
        </div>

        <div className='we-specialize-in flex flex-col sm:flex-row sm:items-center sm:justify-center'>
          WE SPECIALIZE IN :
          <span className='specialize-item mt-2 sm:mt-0 sm:ml-2'>{`"${specializeItems[currentItem]}"`}</span>
        </div>
      </div>
    </div>
  );
}
