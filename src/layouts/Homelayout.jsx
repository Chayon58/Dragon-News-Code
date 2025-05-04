import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/latestNews';
const Homelayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto flex justify-between items-center my-3'>
                    <LatestNews></LatestNews>   
                </section>
            </header>
            <main>
                <section className="left-nav"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right-nav"></section>
            </main>
        </div>
    );
};

export default Homelayout;