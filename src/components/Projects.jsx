function Projects({ title, imageUrl }) {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      {/* hover effects */}
      <div className="opacity-0 group-hover:opacity-100 ">
        <span className="text-2xl font-bold text-white tracking-wider">
          {title}
        </span>
        <div className="pt-8 text-center">
          <a href="/">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
              Demo
            </button>
          </a>
          <a href="/">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
