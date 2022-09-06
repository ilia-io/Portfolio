import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JS from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Github from '../assets/github.png';
import Icons from './Icons';
import Redux from '../assets/redux1.png';
import Responsive from '../assets/resp3.png';
import Git from '../assets/git1.png';

import { JackInTheBox } from 'react-awesome-reveal';

const icons = [
  {
    title: 'HTML',
    imageUrl: HTML,
  },
  {
    title: 'CSS',
    imageUrl: CSS,
  },
  {
    title: 'JavaScript',
    imageUrl: JS,
  },
  {
    title: 'Responsive UI',
    imageUrl: Responsive,
  },
  {
    title: 'React',
    imageUrl: ReactImg,
  },
  {
    title: 'Redux Toolkit',
    imageUrl: Redux,
  },
  {
    title: 'Git',
    imageUrl: Git,
  },
  {
    title: 'GitHub',
    imageUrl: Github,
  },
];

function Skills() {
  return (
    <div
      name="skills"
      className="w-full h-full py-8 my-20 bg-[#0a192f] text-gray-300 "
    >
      {/* container */}

      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#F4C324]">
            Skills
          </p>
          <p className="py-10">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {icons.map((icon, index) => (
            <JackInTheBox fraction="0.9" duration={700} triggerOnce>
              <Icons {...icon} key={index} />
            </JackInTheBox>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
