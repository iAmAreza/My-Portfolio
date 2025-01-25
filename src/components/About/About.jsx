const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8 text-center md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-lg md:text-xl mt-8 md:mt-16 text-justify">
        I am Syed Ahmad Reza, a final-year undergraduate student in the Department of Computer Science and Engineering at CUET. From the very beginning, computer science has been a fascinating subject for me, as it challenges me to think creatively and solve problems innovatively. My journey started with competitive programming, where I improved my problem-solving skills by solving over 500 problems on various online platforms. This foundation led me to explore web development, starting with HTML, CSS, and JavaScript, and later advancing to Python, along with frameworks like Django, Flask and FastAPI to create dynamic web applications. I am deeply passionate about continuous learning and aspire to grow with the ever-evolving field of technology, contributing to meaningful advancements in the industry.
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
