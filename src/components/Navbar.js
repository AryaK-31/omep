import React, { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';
import eplogo from './logo2.png'
import eplogo2 from './eplogo.png'
// import logo from './logo.jpg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Navbar() {

  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [logo, setLogo] = useState(eplogo);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
        setLogo(eplogo2)
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
        setLogo(eplogo)
      }
    };

    window.addEventListener('scroll', changeColor, { passive: true });

    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    if (nav) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [nav]);

  return (
    <div style={{ backgroundColor: `${color}` }} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <div className='max-w-[1240px] m-auto flex justify-between p-4 items-center text-white'>
        <a href='/' >
          <img src={logo} alt="Logo" className="logo-image" />
        </a>
        <ul style={{ color: `${textColor}` }} className='text-xl font-nav tracking-wider hidden sm:flex'>
          <li className='link link-underline link-underline-black p-4'>
            <a href='/' activeclassname='active'>
              Home
            </a>
          </li>
          <li className='link link-underline link-underline-black p-4'>
            <a href='#about' activeclassname='active' smooth="true">
              About
            </a>
          </li>
          <li className='link link-underline link-underline-black p-4'>
            <a href='#services' activeclassname='active' smooth="true">
              Services
            </a>
          </li>
          <li className='link link-underline link-underline-black p-4'>
            <a href='#products' activeclassname='active' smooth="true">
              Products
            </a>
          </li>
          <li className='link link-underline link-underline-black p-4'>
            <a href='#contacts' activeclassname='active' smooth="true">
              Contacts
            </a>
          </li>
        </ul>

        <div onClick={handleNav} className='block sm:hidden z-10 '>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        <div className={nav ? 'sm:hidden font-medium absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease duration-300' : 'sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease duration-300'}>
          <ul>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <a href='/' activeclassname='active'>
                Home
              </a>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <a href='/gallery' activeclassname='active'>
                About
              </a>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <a href='/portfolio' activeclassname='active'>
                Products
              </a>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <a href='/contacts' activeclassname='active'>
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
