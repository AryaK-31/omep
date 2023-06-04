import React, { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';
import eplogo from './eplogo.png'
import logo from './logo.jpg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Navbar() {

  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [lg, setLg] = useState(logo);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div style={{ backgroundColor: `${color}` }} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <div className='max-w-[1240px] m-auto flex justify-between p-4 items-center text-white'>
        <a href='/' exact>
          <img src={eplogo} alt="Logo" className="logo-image"/>
        </a>
        <ul style={{ color: `${textColor}` }} className='text-xl hidden sm:flex'>
          <li className='link link-underline link-underline-black p-4'>
            <a href='/' exact activeClassName='active'>
              Home
            </a>
          </li>
          <li className='link link-underline link-underline-black p-4'>
            <a href='#about' activeClassName='active' smooth>
              About
            </a>
          </li>
          <li className='link link-underline link-underline-black p-4'>
            <a href='#products' activeClassName='active' smooth>
              Products
            </a>
          </li>
          <li className='link link-underline link-underline-black p-4'>
            <a href='#contacts' activeClassName='active' smooth>
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
        
        <div className={nav ? 'sm:hidden font-medium absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black/90 text-center ease duration-300' : 'sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease duration-300'}>
          <ul>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <a href='/' exact activeClassName='active'>
                Home
              </a>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <a href='/gallery' activeClassName='active'>
                About
              </a>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <a href='/portfolio' activeClassName='active'>
                Products
              </a>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <a href='/contacts' activeClassName='active'>
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
