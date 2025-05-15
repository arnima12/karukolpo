import React from 'react';

const galleryImages = [
  
  {
    src: "https://i.ibb.co/nZMf0Kd/lumensoft-technologies-p-Sz3-JFTDZMA-unsplash.jpg",
    caption: "From raw material to masterpiece ✨",
    size: "row-span-2",
  },
  {
    src: "https://i.ibb.co/nZMf0Kd/lumensoft-technologies-p-Sz3-JFTDZMA-unsplash.jpg",
    caption: "From raw material to masterpiece ✨",
    size:'col-span-2'
  },
  {
    src: "https://i.ibb.co/nZMf0Kd/lumensoft-technologies-p-Sz3-JFTDZMA-unsplash.jpg",
    caption: "From raw material to masterpiece ✨",
    size:"col-span-2 row-span-2"
  },
  {
    src: "https://i.ibb.co/nZMf0Kd/lumensoft-technologies-p-Sz3-JFTDZMA-unsplash.jpg",
    caption: "From raw material to masterpiece ✨",
    size:""
  },
  {
    src: "https://i.ibb.co/nZMf0Kd/lumensoft-technologies-p-Sz3-JFTDZMA-unsplash.jpg",
    caption: "From raw material to masterpiece ✨",
    size:"row-span-2"
  },
  {
    src: "https://i.ibb.co/nZMf0Kd/lumensoft-technologies-p-Sz3-JFTDZMA-unsplash.jpg",
    caption: "From raw material to masterpiece ✨",
    size:""
  },
  
  
];

function BehindTheScenes() {
  return (
      <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Behind the Scenes</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[150px]">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg group cursor-pointer shadow-lg transition-all duration-500 hover:shadow-xl ${image.size}`}
          >
            <img
              src={image.src}
              alt={`Behind the Scenes ${index + 1}`}
              className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-lg font-semibold px-4">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BehindTheScenes;
