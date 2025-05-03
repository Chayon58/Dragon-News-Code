import React from 'react';
import logo from '../assets/logo.png';
const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3'> 
            <img className='w-[450px]' src={logo} alt="" />
            <p className='font-bold text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-bold text-black'>{format(new Date(), 'EEEE ,')}</p>
        </div>
    );
};

export default Header;