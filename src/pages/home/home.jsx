import React from 'react';
import './style.scss'
import HeroBanner from './heroBanner/heroBanner';
import Trending from './trending/trending';
const Home = () =>{
    return (
        <div className="homePage">
            <HeroBanner/>
            <Trending/>
            <div className="h-d"></div>
        </div>
    )
}
export default Home