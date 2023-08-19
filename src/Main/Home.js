import React from 'react';
import ActionBar from '../Component/Actionbar';
import Slide from '../Component/Slide';
import Car from '../Car/Car';
import Model from '../Model/Model';
import Ioniq from '../Car/Ioniq';
import Nav from '../Nav/Nav';

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
            <Model />
            <Ioniq />
            <Nav />
        </div>
    );
};
  
export default Home;
