function Icons({ title, imageUrl }) {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
      <img className="w-20 mx-auto" src={imageUrl} alt={`${title} icon`} />
      <p className="my-4 pb-2">{title}</p>
    </div>
  );
}

export default Icons;
