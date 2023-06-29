import React from 'react'
import slide1 from "../assets/slider/slide1.jpg";
import slide4 from "../assets/slider/slide4.jpg";
import slide5 from "../assets/slider/slide5.jpg";
import slide6 from "../assets/slider/slide6.jpg";
import slide7 from "../assets/slider/slide7.jpg";

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-4xl font-bold text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src={slide1} />
            </div>
            <div>
            <img className='w-full h-full object-cover' src={slide4} />
            </div>
            <div>
            <img className='w-full h-full object-cover' src={slide5} />
            </div>
            <div>
            <img className='w-full h-full object-cover' src={slide6} />
            </div>
            <div>
            <img className='w-full h-full object-cover' src={slide7} />
            </div>
        </div>
    </div>
  )
}

export default Gallery