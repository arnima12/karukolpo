import React from 'react';
import bannerImg from '../../../assets/karukolpo1.png';

function Banner() {
  return (
    <div
    className="h-screen bg-cover bg-center relative pt-16" 
    style={{ backgroundImage: `url(${bannerImg})` }}
  >
    {/* <div className="h-full w-full bg-black bg-opacity-40 flex items-center justify-center">
    </div> */}
  </div>
  );
}

export default Banner;
