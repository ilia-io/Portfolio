import Pizza from '../assets/cover-pizza.png';
import Gallery from '../assets/cover-gallery.png';
import Quiz from '../assets/cover-quiz.png';
import Invites from '../assets/cover-invites.png';
import Dashboard from '../assets/cover-dashboard.png';
import Project from './Project';

const projects = [
  {
    title: 'Pizza Order App',
    imageUrl: Pizza,
    linkDemo: 'https://pizza-ilia-io.vercel.app/',
    linkCode: 'https://github.com/ilia-io/pizza',
  },
  {
    title: 'Image Gallery App',
    imageUrl: Gallery,
    linkDemo: 'https://image-gallery-zeta-three.vercel.app/',
    linkCode: 'https://github.com/ilia-io/image-gallery',
  },
  {
    title: 'Quiz App',
    imageUrl: Quiz,
    linkDemo: 'https://quiz-khaki-three.vercel.app/',
    linkCode: 'https://github.com/ilia-io/quiz',
  },
  {
    title: 'User-Invites App',
    imageUrl: Invites,
    linkDemo: 'https://invites-rosy.vercel.app/',
    linkCode: 'https://github.com/ilia-io/invites',
  },
  {
    title: 'Admin Dashboard App',
    imageUrl: Dashboard,
    linkDemo: 'https://dashboard-red-tau.vercel.app/',
    linkCode: 'https://github.com/ilia-io/dashboard',
  },
];

function Work() {
  return (
    <>
      <div className="p-12 bg-[#0a192f]"></div>
      <div
        name="work"
        className="w-full h-screen py-[100px] text-gray-300 bg-[#0a192f]"
      >
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#F4C324]">
              Work
            </p>
            <p className="py-6">Check out some of mine recent work</p>
          </div>
          {/* container */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* grid item */}
            {projects.map((item, index) => (
              <Project key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
