import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import Projects from './Projects';

const projects = [
  {
    title: 'React JS Application',
    imageUrl: WorkImg,
  },
  {
    title: 'React JS Application',
    imageUrl: realEstate,
  },
  {
    title: 'React JS Application',
    imageUrl: WorkImg,
  },
  {
    title: 'React JS Application',
    imageUrl: realEstate,
  },
  {
    title: 'React JS Application',
    imageUrl: WorkImg,
  },
  {
    title: 'React JS Application',
    imageUrl: realEstate,
  },
];

function Work() {
  return (
    <div name="work" className="w-full mt-[50] text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of mine recent work</p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}
          {projects.map((project, index) => (
            <Projects key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
