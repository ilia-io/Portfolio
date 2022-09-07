function Project({ title, imageUrl, linkDemo, linkCode }) {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      {/* hover effects */}
      <div className="md:opacity-0 group-hover:opacity-100 group-active:opacity-100">
        <p className="text-xl text-center p-1 rounded-lg font-extrabold bg-gray-800 text-gray-100 md:bg-white md:text-gray-700 tracking-wider">
          {title}
        </p>
        <div className="pt-4 text-center">
          <a target="_blank" href={linkDemo}>
            <button className="text-center rounded-lg px-4 py-2 m-2 md:bg-white md:text-gray-700 font-bold text-lg md:hover:bg-[#F4C324] md:hover:text-gray-900 transition bg-gray-800 text-gray-100">
              Demo
            </button>
          </a>
          <a target="_blank" href={linkCode}>
            <button className="text-center rounded-lg px-4 py-2 m-2 md:bg-white md:text-gray-700 font-bold text-lg md:hover:bg-[#F4C324] md:hover:text-gray-900 transition bg-gray-800 text-gray-100">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
