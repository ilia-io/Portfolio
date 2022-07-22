import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JS from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Icons from './Icons';

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
    title: 'JS',
    imageUrl: JS,
  },
  {
    title: 'React',
    imageUrl: ReactImg,
  },
  {
    title: 'Node',
    imageUrl: Node,
  },
  {
    title: 'FireBase',
    imageUrl: FireBase,
  },
  {
    title: 'AWS',
    imageUrl: AWS,
  },
  {
    title: 'GitHub',
    imageUrl: Github,
  },
];

function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="tex-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4 ">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {icons.map((icon, index) => (
            <Icons {...icon} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
