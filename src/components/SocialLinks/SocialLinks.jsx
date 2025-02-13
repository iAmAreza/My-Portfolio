import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin className="ml-2" size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/ahmad-reza-3423121b6/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub className="ml-2" size={30} />
        </>
      ),
      href: 'https://github.com/iAmAreza',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail className="ml-2" size={30} />
        </>
      ),
      href: 'mailto:foo@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill className="ml-2" size={30} />
        </>
      ),
      href: '/Syed_Ahmad_Reza_CV.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
          >
            <a
              href={href}
              download={download}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-white"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
