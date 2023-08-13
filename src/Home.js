import React from 'react';
import ActionBar from './Component/Actionbar';

const Img = () => {
    return (
        <div>
            <img src='img\imgBackground.jpg' className='' alt=''></img>
        </div>
    )
}

const Home = () => {
    return (
        <div>
            <ActionBar />
            <Img />
        </div>
    );
  };
  
  export default Home;