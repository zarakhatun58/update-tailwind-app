import React from 'react';
import Information from '../Information/Information';
import Notification from '../Notification/Notification';
import Profile from './../Profile/Profile';

const Home = () => {
    return (
        <>
          <Profile/>
          <Information/>
          <Notification/>
        </>
    );
};

export default Home;