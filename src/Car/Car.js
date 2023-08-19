import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Car.css'; 

const CarImgSlide = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ['img/car1.png', 'img/car2.png', 'img/car3.png', 'img/car4.png'];
  
  const slideText = [
    { title: 'The all-new SANTA FE', subtitle: '일상과 일상 사이를 열다' },
    { title: 'The new AVANTE N', subtitle: 'Never just drive' },
    { title: 'SONATA The Edge', subtitle: '익숙함도 완전히 새롭게' },
    { title: 'CASPER', subtitle: 'case by CASPER' },
    // Add more slide texts for each image as needed
  ];

  const handleSlideChange = (selectedIndex) => {
    setImageIndex(selectedIndex);
  }

  {/*타임어택 사진 변경*/}

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (imageIndex + 1) % images.length;
      setImageIndex(newIndex);
    }, 2900); 
    return () => clearInterval(interval);
  }, [imageIndex]);

  return (
    <div className='absolute'>
      <p className="absolute font-bold text-[2rem] ml-8 mt-[7rem]">{slideText[imageIndex].title}</p>
      <p className="absolute font-medium text-1xl ml-9 mt-[10.2rem]">{slideText[imageIndex].subtitle}</p>

      <Carousel
        selectedItem={imageIndex}
        onChange={handleSlideChange}
        showIndicators={true}
        showThumbs={false}
        showStatus={false}
      >
        {images.map((imageUrl, idx) => (
          <div key={idx} className='h-[41.8rem]'>
            <img src={imageUrl} alt={`Slide ${idx}`} className=" mt-[-1.3rem] h-full object-contain" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const Car = () => {
  return (
    <div>
      <CarImgSlide />
    </div>
  );
};


export default Car;
