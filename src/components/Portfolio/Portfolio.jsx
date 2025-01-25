import project1 from '../../assets/images/project1.png';
import project2 from '../../assets/images/project2.png';
import project3 from '../../assets/images/project3.png';

function Portfolio() {
  const porfolios = [
    {
      id: 1,
      src: project1,
      link: 'https://github.com/iAmAreza/Diabetes_Prediction_Flask_Project',
    },
    {
      id: 2,
      src: project2,
      link: 'https://github.com/iAmAreza/Django-Full-stack-CRUD',
    },
    {
      id: 3,
      src: project3,
      link: 'https://github.com/iAmAreza/Fetch-Youtube-Comments',
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-14 sm:px-0">
          {porfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => window.open(link, '_blank')} // Opens link in a new tab
                  className="w-full px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
