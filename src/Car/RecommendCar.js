import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Recommend.css'; 

const Recommend = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ['img/FirstCar.jpg', 'img/SecondCar.jpg', 'img/ThirdCar.jpg'];

  const slideText = [
    {title:'1위. 디 올 뉴 그랜저 Hybrid'},
    {title:'2위. 디 올 뉴 코나'},
    {title:'3위. 투싼 Hybrid'}
  ]

  const handleSlideChange = (selectedIndex) => {
    setImageIndex(selectedIndex);
  }

  {/*타임어택 사진 변경*/}

  
  return (
    <div className='absolute m-4'>

        <p className="absolute font-extrabold text-[1rem] mt-[19rem]">{slideText[imageIndex].title}</p>

        <Carousel
            className='carousel2'
            selectedItem={imageIndex}
            onChange={handleSlideChange}
            showIndicators={true}
            showThumbs={false}
            showStatus={false}
        >
            {images.map((imageUrl, idx) => (
            <div key={idx} className=' h-[23.8rem]'>
                <img src={imageUrl} alt={`Slide ${idx}`} className="mt-[-2.9rem] h-full object-contain"/>
            </div>
            ))}
        </Carousel>
    </div>
  );
};

const RecommendCar = () => {
  return (
    <div>
      <Recommend />
    </div>
  );
};

export default RecommendCar;
