import React, { useEffect, useState } from 'react';
import { Logo, Logow,navipo,navfutur,navmutaul,navst0cks,navderiv,navportf,navalterna,navinsure } from '../assets';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { MdKeyboardArrowDown } from "react-icons/md";

const Menu = [
  {
    label: 'home',
    url: '/',
  },
  {
    label: 'about us',
    url: '/about-us',
  },
  {
    label: 'services',
    url: 'javascript:void(0)',
    submenu: [
      { img:navipo,label: 'IPO', url: '/ipo' },
      { img:navmutaul ,label: 'Mutual Fund', url: '/mutual-fund' },
      { img:navst0cks,label: 'Equity', url: '/equity' },
      { img:navalterna,label: 'Alternative Investment Fund', url: '/alternative-investment-fund' },
      { img:navinsure,label: 'Insurance', url: '/insurance' },
      { img:navportf,label: 'Intelligent Advisory Portfolios', url: '/intelligent-advisory-portfolios' },
      { img:navfutur ,label: 'Portfolio Management Services', url: '/portfolio-management-services' },
      { img:navderiv,label: 'Derivative', url: '/derivative' },
    ],
  },
  {
    label: 'Calculator',
    url: '/calculator',
  },
  {
    label: 'contact us',
    url: '/contact-us',
  },
];

const Header = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  const [background, setBackground] = useState('headre-bg');
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  menuOpen
  ? (document.body.style.overflow = "hidden")
  : (document.body.style.overflow = "unset");


  const handleScroll = () => {
    if (window.scrollY > 100) {
      setBackground('headre-bg');
    } else {
      setBackground('headre-bg');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleMobileSubmenu = () => {
    setMobileSubmenuOpen(!mobileSubmenuOpen);
  };

  const handleMouseEnter = () => {
    setShowSubMenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false);
  };

  return (
    <nav className={`text-secclr fixed left-0 top-0 w-full z-50`}>
      <div className={`w-11/12 ${background} shadow-xl rounded-full p-5 px-6 xl:px-10 mt-5 2xl:w-10/12 mx-auto h-20 md:h-24 flex items-center justify-between text-base`}>
        <Link to={'/'}>
          <img className='h-11 md:h-16' src={Logo} alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden xl:flex gap-10 items-center'>
          {Menu?.map((mn, i) => (
            <li
              key={i}
              className={`relative capitalize ${currentPathname === mn.url ? 'text-prmclr' : ''} text-base font-semibold`}
              onMouseEnter={mn.submenu ? handleMouseEnter : null}
              onMouseLeave={mn.submenu ? handleMouseLeave : null}
            >
              <Link to={mn.url}>{mn.label}</Link>
              {mn.submenu && (
                <div
                  className={`absolute text-sm  top-full -right-40 w-[600px] bg-white border rounded-2xl shadow-xl p-5 z-50 transition-opacity duration-300 ease-in-out ${showSubMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                >
                  <ul className='grid grid-cols-2 w-full'>
                    {mn.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="py-2 flex items-center gap-3">
                        <img className='h-8 w-8 object-cover' src={subItem.img} alt="" />
                        <a href={subItem.url} className="text-secclr hover:text-prmclr duration-200">
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className='block xl:hidden'>
          {menuOpen ? (
            <IoMdClose className='text-2xl cursor-pointer' onClick={toggleMenu} />
          ) : (
            <GiHamburgerMenu className='text-2xl cursor-pointer' onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='block xl:hidden bg-white shadow-lg p-6 absolute top-full left-0 w-full z-50'>
          <ul className='flex flex-col gap-4'>
            {Menu?.map((mn, i) => (
              <li key={i} className="relative">
                <Link
                  to={mn.url}
                  className="capitalize flex items-center gap-2 text-base font-semibold"
                  onClick={mn.submenu ? toggleMobileSubmenu : toggleMenu}
                >
                  {mn.label} {mn.submenu && <MdKeyboardArrowDown/>}
                </Link>
                {mn.submenu && mobileSubmenuOpen && (
                  <ul className="pl-4 mt-2 transition-all duration-300 ease-in-out">
                    {mn.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="py-1">
                        <a
                          href={subItem.url}
                          className="text-secclr text-sm font-semibold"
                          onClick={toggleMenu}
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
