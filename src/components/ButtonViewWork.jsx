import React from 'react';
import { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Link from 'react-scroll/modules/components/Link';

const ButtonViewWork = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
      <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#F4C324] hover:border-[#F4C324] hover:text-gray-800 hover:font-medium">
        View Work
        <span className="group-hover:rotate-90 duration-300">
          <HiArrowNarrowRight className="ml-3" />
        </span>
      </button>
    </Link>
  );
};

export default ButtonViewWork;
