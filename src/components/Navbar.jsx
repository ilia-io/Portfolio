import Logo from '../assets/logo.png';
import { FaBars, FaTimes, FaGithub, FaTelegram } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { SiHabr } from 'react-icons/si';
import { Zoom } from 'react-awesome-reveal';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 text-2xl z-50">
      <Link
        to="home"
        activeClass="textGradient"
        spy={true}
        smooth={true}
        duration={500}
      >
        <div>
          <img
            style={{ width: '50px', cursor: 'pointer' }}
            src={Logo}
            alt="Logo"
          />
        </div>
      </Link>

      {/* menu */}
      <Zoom duration={700} triggerOnce>
        <ul className="hidden md:flex w-[500px] justify-around">
          <li>
            <Link
              to="home"
              activeClass="textGradient"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              activeClass="textGradient"
              spy={true}
              smooth={true}
              duration={500}
              offset={-35}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="work"
              activeClass="textGradient"
              spy={true}
              smooth={true}
              duration={500}
              offset={-25}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              activeClass="textGradient"
              spy={true}
              smooth={true}
              duration={500}
              offset={-40}
            >
              Contact
            </Link>
          </li>
        </ul>
      </Zoom>
      {/* hamburger */}
      <div onClick={handleClick} className="z-10">
        {nav ? <FaTimes /> : <FaBars className="md:hidden" />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          nav
            ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
            : 'hidden'
        }
      >
        <li className="py-6 text-4xl ">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6274BC]">
            <a
              className="flex justify-between items-center w-full text-gray-100 text-sm"
              href="https://career.habr.com/ilia-io"
              target="_blank"
              rel="noreferrer"
            >
              Habr career <SiHabr size={33} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#222]">
            <a
              className="flex justify-between items-center w-full text-gray-200 text-sm"
              href="https://github.com/ilia-io"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3390EC]">
            <a
              className="flex justify-between items-center w-full text-gray-200 text-sm"
              href="https://t.me/ilia_i0"
              target="_blank"
              rel="noreferrer"
            >
              Telegram <FaTelegram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
