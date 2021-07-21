import React from 'react';
import {  homeObjThree } from './Data';
import { InfoSection , Pricing } from '../../Components';

const Home = () => {
    return (
        <>

          <InfoSection {...homeObjThree} />  
        </>
    )
}

export default Home
