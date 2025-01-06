import React from 'react';

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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex vero
          recusandae quod iusto similique, asperiores velit rerum, quis, commodi
          odit fugiat. Ducimus culpa, aliquid animi ipsum sapiente laborum
          doloremque quidem assumenda blanditiis, minus fugiat reiciendis! Est,
          esse. Quis, repellendus animi iste a corporis quibusdam beatae quos,
          dicta tempore ipsum consequatur.
        </p>

        <br />

        <p className="text-lg md:text-xl text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          repudiandae cumque in eaque vel soluta excepturi itaque consectetur
          distinctio? Corrupti eaque assumenda rem voluptate architecto
          necessitatibus laborum, dignissimos error nobis officiis dolorum hic
          facilis in quas incidunt sit? Molestiae impedit sunt iste a laboriosam
          sit autem tempora, expedita voluptatum libero.
        </p>
      </div>
    </div>
  );
};

export default About;
