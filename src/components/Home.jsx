import { Slide } from 'react-awesome-reveal';
import AnimatedBackground from './AnimatedBackground/AnimatedBackground';
import ButtonViewWork from './ButtonViewWork';

function Home() {
  return (
    <>
      <div name="home" className="w-full h-screen py-8 bg-[#0a192f]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <Slide cascade duration={400} triggerOnce>
            {' '}
            <p className="text-[#F4C324] text-xl">👋 Hello, my name is</p>
            <h1 className="text-4xl py-2 sm:text-7xl font-bold text-[#ccd6f6]">
              <i>Ilia Karpov</i>
            </h1>
            <h2 className="text-4xl sm:text-7-xl font-bold text-[#8892b0]">
              I'm a Frontend Developer
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]"></p>
          </Slide>
        </div>
      </div>
      <AnimatedBackground />
    </>
  );
}

export default Home;
