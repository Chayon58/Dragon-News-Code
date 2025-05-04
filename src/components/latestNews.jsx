import React from 'react';
import Marquee from 'react-fast-marquee';

const latestNews = () => {
    return (
        <div className='flex items-center gap-3 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5 pauseOnHover={true}'>
            <p className='font-bold'>Fire in the Skies: Today’s Dragon World Report.</p>
            <p className='font-bold'>  Power, Territory, and Ancient Secrets Revealed.</p>
            <p className='font-bold'>The Age of Dragons Unfolds</p>
            <p className='font-bold'>Tracking Power Across the Burning Realms.</p>
            </Marquee>
        </div>
    );
};

export default latestNews;