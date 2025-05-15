import React, { useEffect, useState } from 'react';

function OurStory() {
    const images = [
        "https://i.ibb.co/nZMf0Kd/lumensoft-technologies-p-Sz3-JFTDZMA-unsplash.jpg",
        "https://i.ibb.co/qFrL0qWC/arno-senoner-o-CXVxw-TFwq-E-unsplash.jpg",
        "https://i.ibb.co/39kH0THW/nataliya-melnychuk-5ng-CICAXi-H0-unsplash.jpg",
        "https://i.ibb.co/4wmmf3yN/angela-bailey-tu-Jtzgh-Mu-Ew-unsplash.jpg"
    ];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="py-16 px-6 bg-gradient-to-br from-amber-50 to-pink-50">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 flex-shrink-0">
                    <img 
                        src={images[currentImage]} 
                        alt="Handcrafting in action"  
                        className="w-[120rem] h-96 rounded-2xl shadow-lg transition-transform duration-700 ease-in-out hover:scale-105"
                    />
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800 tracking-tight leading-tight">
                        Our Story
                    </h2>
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        Karukolpo was born out of a passion for creativity and a deep appreciation for the beauty of handcrafted items. We believe every piece tells a unique story, crafted with care, love, and dedication. Our journey began with a simple desire to bring a touch of art into everyday life, blending tradition with modern style.
                    </p>
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        From selecting the finest materials to adding the final details, each piece we create is a reflection of our commitment to quality and authenticity. We take pride in every stitch, every cut, and every detail, ensuring that our creations stand the test of time.
                    </p>
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                        Join us in this journey of artistry and craftsmanship. Discover the stories behind our creations and find a piece that resonates with your unique style.
                    </p>
                    <button className="bg-black text-white px-8 py-3 rounded-full shadow-lg hover:bg-gray-800 transition duration-300">
                        Discover More
                    </button>
                </div>
            </div>
        </section>
    );
}

export default OurStory;
