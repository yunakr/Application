import React from 'react';
import ActionBar from './Component/Actionbar';
import Slide from './Component/Slide';
import Car from './Component/Car';

const Component = () => {
    return (
      <div className='h-[41.8rem]'>
            <img src='img/imgBackground.jpg' className='w-[100%] h-full ' alt=''></img>
      </div>
    );
  };





const Home = () => {
    return (
        <div>
            <Car />
            <Component/>
            <ActionBar />
            <Slide />
        </div>
    );
};
  
export default Home;
