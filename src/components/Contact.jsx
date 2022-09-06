import { animateScroll as scroll } from 'react-scroll';
import { IoIosArrowDown } from 'react-icons/io';

function Contact() {
  return (
    <>
      <div className="p-12 bg-[#0a192f]"></div>
      <div
        name="contact"
        className="w-full h-screen px-4 pt-[100px] bg-[#0a192f] flex flex-col justify-center items-center"
      >
        <form
          action="https://getform.io/f/56e79c19-4b56-488d-b7b7-6bc2d14478a9"
          method="POST"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#F4C324] text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-8">
              Please submit the form or reach out to me on socials below
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="6"
            placeholder="Message"
          ></textarea>
          <button className="text-white hover:text-gray-800 border-2 hover:bg-[#F4C324] hover:border-[#F4C324] px-4 py-3 my-8 mx-auto flex items-center hover:font-medium">
            Let's Collaborate
          </button>
        </form>
        <div className="flex justify-center items-center px-24 mb-24">
          <button onClick={() => scroll.scrollToBottom()}>
            <div className="arrow bounce">
              <div className="fa fa-arrow-down fa-2x">
                <IoIosArrowDown size={80} color="#ccd6f6" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
