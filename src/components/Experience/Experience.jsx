const html = '/assets/images/html.png';
const css = '/assets/images/css.png';
const python = '/assets/images/python.png';
const react = '/assets/images/react.png';
const flask = '/assets/images/flask.png';
const django = '/assets/images/django.png';


function Experience() {
  const techs = [
    {
      id : 1, 
      src : python, 
      title : 'PYTHON', 
      style : 'shadow-yellow-500'
    },
    {
      id : 2, 
      src : django, 
      title : 'DJANGO', 
      style : 'shadow-green-500'
    },
    {
      id : 3, 
      src : flask, 
      title : 'FLASK', 
      style : 'shadow-white'
    },
    {
      id : 4, 
      src : react, 
      title : 'REACT', 
      style : 'shadow-blue-600'
    },
    {
      id : 5, 
      src : html, 
      title : 'HTML', 
      style : 'shadow-orange-500'
    },
    {
      id : 6, 
      src : css, 
      title : 'CSS', 
      style : 'shadow-blue-500'
    },
  ]


  return (
    <div name = 'experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen' >
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>These are the technologies that I have worked on </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
         {
          techs.map(({id,src,title,style}) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}>
            <img src={src} alt="" className='w-20 mx-auto'/>
            <p className='mt-4 font-bold'>{title}</p>
            </div>
          ))
         }
        </div>



      </div>
      
    </div>
  )
}

export default Experience
