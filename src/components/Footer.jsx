import { FaGithub, FaTelegram } from 'react-icons/fa';
import { SiHabr } from 'react-icons/si';
import { IconContext } from 'react-icons';

function Footer() {
  return (
    <div className="w-full flex flex-col justify-center items-center p-8 bg-[#0a192f] text-gray-300 text-2xl">
      <IconContext.Provider
        value={{
          color: '#CCD6F6',
          size: '2.4rem',
          className: 'cursor-pointer',
        }}
      >
        <div className="flex justify-between items-center p-4 min-w-[220px] ">
          <a href="https://t.me/ilia" target="blank">
            <FaTelegram />
          </a>
          <a href="https://github.com/ilia-io" target="blank">
            <FaGithub />
          </a>
          <a href="https://career.habr.com/ilia-io" target="blank">
            <SiHabr />
          </a>
        </div>
      </IconContext.Provider>
      <p className="p-4">© 2022</p>
    </div>
  );
}

export default Footer;
