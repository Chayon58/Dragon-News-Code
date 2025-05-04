import React from 'react';
import Marquee from 'react-fast-marquee';

const latestNews = () => {
    return (
        <div className='flex items-center gap-3 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee>
            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, numquam?</p>
            </Marquee>
        </div>
    );
};

export default latestNews;