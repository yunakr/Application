import React from 'react';
import ActionBar from './Component/Actionbar';
import Slide from './Component/Slide';
import { View } from 'react-native';


const Component = () => {
    return (
      <View className='h-[41.8rem]'>
            <img src='img/imgBackground.jpg' className='w-[100%] h-full ' alt=''></img>
      </View>
    );
  };




const Home = () => {
    return (
        <div>
            <Component/>
            <ActionBar />
            <Slide />
        </div>
    );
};
  
export default Home;
