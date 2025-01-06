import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import myimg from '../../assets/images/myimage.png';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white relative"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 z-10">
            I'm a Full Stack Developer and Machine Learning Enthusiast
          </h1>
          <p className="text-gray-400 mb-4 max-w-md z-10">
            I have done various projects on machine learning and built
            applications with Django and Flask. I also use React and Tailwind
            for front-end development. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Voluptatibus delectus tenetur placeat ipsa
            necessitatibus.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="group flex items-center cursor-pointer w-fit my-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-md">
              Portfolio
              <span className="group-hover:rotate-90 duration-100">
                <GoArrowRight size={25} className="ml-2" />
              </span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0 md:w-1/2">
          <img
            src={myimg}
            alt="myimage"
            className="rounded-2xl mx-auto w-1/2 h-auto md:w-3/4 md:h-auto shadow-lg shadow-[rgba(255,215,0,0.7)] hover:scale-105 hover:shadow-[4px_4px_10px_rgba(255,215,0,0.9)] transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
