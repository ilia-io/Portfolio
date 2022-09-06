import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const ButtonViewWork = () => {
  return (
    <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#F4C324] hover:border-[#F4C324] hover:text-gray-800 hover:font-medium">
      View Work
      <span className="group-hover:rotate-90 duration-300">
        <HiArrowNarrowRight className="ml-3" />
      </span>
    </button>
  );
};

export default ButtonViewWork;
