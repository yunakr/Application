import React, { useState } from 'react';
import RecommendCar from '../Car/RecommendCar';

const ModelText = () => {

  const [selectedButton, setSelectedButton] = useState('전체');

  const handleButtonClick = (buttonText) => {
    setSelectedButton(buttonText);
  };
  
  return (
    <div className='h-[8.2rem]'style={{zIndex:2}}>
        <p className='flex justify-center mt-[4.4rem] font-extrabold text-[1.5rem]'>Model</p>
        <span className='flex justify-center mt-[1rem] font-extrabold text-[#666] text-[0.7rem]'>최근 한 달 동안 고객님들이 가장 많이 구매하신 모델입니다.</span>
    
        <div className='flex text-[#666] font-bold text-[0.9rem] m-[1.8rem] justify-center'>
            <button onClick={() => handleButtonClick('전체')}>
            <p className={selectedButton === '전체' ? 'ml-2 mr-2 text-[#007fa8]' : 'ml-2 mr-2'}>전체</p>
            </button>
            <div className='bg-[#b4b4b4] border border-l-1 mt-[0.3rem] h-[0.8rem]'></div>


            <button onClick={() => handleButtonClick('2~30대')}>
            <p className={selectedButton === '2~30대' ? 'ml-2 mr-2 text-[#007fa8]' : 'ml-2 mr-2'}>2~30대</p>
            </button>
            <div className='bg-[#b4b4b4] border border-l-1 mt-[0.3rem] h-[0.8rem]'></div>

            <button onClick={() => handleButtonClick('40대')}>
            <p className={selectedButton === '40대' ? 'ml-2 mr-2 text-[#007fa8]' : 'ml-2 mr-2'}>40대</p>
            </button>
            <div className='bg-[#b4b4b4] border border-l-1 mt-[0.3rem] h-[0.8rem]'></div>

            <button onClick={() => handleButtonClick('50대')}>
            <p className={selectedButton === '50대' ? 'ml-2 mr-2 text-[#007fa8]' : 'ml-2 mr-2'}>50대</p>
            </button>
        </div>
    </div>
  );
}

const Model = () => {
    return (
        <div>
            <ModelText />
            <RecommendCar />
        </div>
    );
};
  
export default Model;
