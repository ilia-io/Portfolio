import { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

import { Slide } from 'react-awesome-reveal';
import AnimatedBackground from './AnimatedBackground/AnimatedBackground';

function Home() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      name="home"
      className="w-full h-screen py-[10vh] sm:pt-[10vh] bg-[#0a192f]"
    >
      {/* Container */}
      <div className="max-w-[1000px] py-[20vh] mx-auto px-8 flex flex-col justify-center h-full">
        <Slide cascade duration={400} triggerOnce>
          <p className="text-[#F4C324] text-xl">👋 Hello, my name is</p>
          <h1 className="text-4xl py-2 sm:text-7xl font-bold text-[#ccd6f6]">
            <i>Ilia Karpov</i>
          </h1>
          <h2 className="text-4xl sm:text-7-xl font-bold text-[#8892b0]">
            I'm a Frontend Developer
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            aliquam saepe perspiciatis assumenda deserunt, quisquam explicabo
            quas cum ratione molestiae doloribus voluptas voluptatibus. Labore,
            soluta alias! Ipsam sequi facilis pariatur?
          </p>
          <div>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#F4C324] hover:border-[#F4C324] hover:text-gray-800 hover:font-medium">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </Slide>
      </div>
      <AnimatedBackground />
    </div>
  );
}

export default Home;
