import {BsFillMoonStarsFill} from 'react-icons/bs';
import Image from 'next/image';
import RImage from '../public/letter.png';
import { FaGithub } from "react-icons/fa";
import {AiFillTwitterCircle,AiFillLinkedin} from 'react-icons/ai'
import Bunny from '../public/bunny.png';
import C1 from '../public/cthralu-1.png'

import P1 from '../public/portfolio-1.png'



export default function Home() {
  const skill = 'bg-gradient-to-r from-green-400 via-red-400 to-red-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl '
  return (
    <main className='bg-gray-900 px-8 py-2 text-white'>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}
<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
  <div className=" rounded-lg bg-gray-900 lg:col-span-2">
    {/* link */}
    <div id='T1' className="p-8 md:p-12 lg:px-16 lg:py-18">
  <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Rohith Sriramula

        <span className="sm:block py-5">Fullstack Developer. </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed leading-4">
      I am Rohith, an enthusiastic Fullstack Developer driven by a deep passion for crafting resilient and scalable web applications. My journey in the realm of programming commenced with a profound fascination for transforming conceptual ideas into sophisticated, user-centric software solutions
      </p>

      <div className="text-5xl mt-8 flex flex-wrap justify-center gap-4">
      <a
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" target='_blank'
          href="https://www.linkedin.com/in/rohith-sriramula-3962412a5/"
        >
          <AiFillLinkedin size={20}/ >
        </a>

        <a
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" target='_blank'
          href="https://github.com/rohith2613"
        >
          <FaGithub size={20} />
        </a>
        <a
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          target='_blank' href="https://twitter.com/rohithS2613"
        >
          <AiFillTwitterCircle size={20}/>
        </a>
      </div>
    </div>
  </div>

  </div>
  <div className=" rounded-lg bg-gray-900 mb-6">
    {/* image */}
    <div className='relative mx-auto bg-gradient-to-b from-teal-600 to-violet-500 rounded-full w-80 h-80 mt-20  '>
  <Image 
    alt="Student"
    src={Bunny}
    className="h-56 w-full object-cover sm:h-full"
  />
  </div>

  </div>
</div>

<section className="overflow-hidden bg-gray-900 sm:grid sm:grid-cols-2">
  
  {/* ---------------- */}

</section>


{/*  */}
<section className=' mb-2 '>
  <div>
  <span className="relative flex justify-center mb-8">
  <div
    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-75"
  ></div>

  <span className="relative z-10 bg-gray-900 px-6 font-burtons text-3xl">Skills</span>
</span>
<div className="mt-2 grid grid-cols-1 lg:grid-cols-2">
  
  <div className="mx-auto lg:col-span-1 flex items-center">
    {/* <!-- Your content here --> */}
    <ul>
      <li className={skill}>HTML</li>
      <li className={skill}>CSS</li>
      <li className={skill}>JavaScript</li>
      <li className={skill}>Bootstrap</li>
      <li className={skill}>TailwindCSS</li>
      <li className={skill}>TypeScript</li>
      <li className={skill}>MongoDB</li>
      <li className={skill}>Git</li>
      
    </ul>
  </div>
  <div className="mx-auto lg:col-span-1 flex items-center">
    {/* <!-- Your content here --> */}

     <ul>
<li className={skill}>ReactJs</li>
<li className={skill}>Node.js</li>
<li className={skill}>Express.js</li>
<li className={skill}>Python</li>
<li className={skill}>Java</li>
<li className={skill}>AWS</li>
<li className={skill}>SQL</li>
<li className={skill}>MySQL</li>
      </ul>
  </div>
</div>


  </div>
</section>

<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mt-9 mb-9">
  {/* EDUCATION */}
  <div className=" rounded-lg bg-gray-900 ">
    <section>
    <div>
  <span className="relative flex justify-center mb-6">
  <div
    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-75"
  ></div>

  <span className="relative z-10 mt-3 mb-3 bg-gray-900 px-6 font-burtons text-3xl">Education</span>
</span>
  </div>

  <div className="flex flex-col items-center text-white">
  <h2 className="sr-only text-white">Steps</h2>

  <div className="relative mx-auto  after:absolute after:inset-y-0 after:left-1/2 after:block after:w-0.5 after:-translate-x-1/2 after:rounded-lg after:bg-gray-100">
    <ol className="relative z-10 flex flex-col gap-2 text-sm font-medium text-gray-500">
      

      <li className="flex items-center bg-gray-900 p-3">
        <span className="h-6 w-6 rounded-full bg-violet-600 text-center text-[10px]/6 font-bold mr-2 text-white">
          1
        </span>

        <span className="ml-2  text-white border-white">
          <h2 className='text-3xl mb-1'>Bachelor's of Computer Applications(BCA)</h2>
          <h3 className='text-2xl mb-1'>Nizam College (OU)</h3>
          <p>CGPA : 8.56/10</p>
          <p>Duration: 2021 - 2024</p>
          
        </span>
      </li>

      <li className="flex items-center bg-gray-900 p-3">
      <span className="h-6 w-6 rounded-full bg-violet-600 text-center text-[10px]/6 font-bold mr-2 text-white">
          2
        </span>

        <span className="ml-2  text-white border-white">
          <h2 className='text-3xl mb-1'>Secondary(XII)</h2>
          <h3 className='text-2xl mb-1'>Sri Chaitanya Jr college</h3>
          <p>Marks : 973/1000</p>
          <p>Duration: 2018 - 2020</p>
          
        </span>
      </li>
    </ol>
  </div>
</div>

    </section>
    
  </div>
  {/* Experience */}
  <div className=" rounded-lg bg-gray-900">
  <section>
  <div>
  <span className="relative flex justify-center mb-6">
  <div
    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-75"
  ></div>

  <span className="relative z-10 mt-3 mb-3 bg-gray-900 px-6 font-burtons text-3xl">Experience</span>
</span>
  </div>


  <div className="flex flex-col items-center text-white">
  <h2 className="sr-only text-white">Steps</h2>

  <div className="relative mx-auto  after:absolute after:inset-y-0 after:left-1/2 after:block after:w-0.5 after:-translate-x-1/2 after:rounded-lg after:bg-gray-100">
    <ol className="relative z-10 flex flex-col gap-2 text-sm font-medium text-gray-500">
      

      <li className="flex items-center bg-gray-900 p-3">
      <span className="h-6 w-6 rounded-full bg-violet-600 text-center text-[10px]/6 font-bold mr-2 text-white">
          1
        </span>

        <span className="ml-2  text-white border-white">
          <h2 className='text-3xl mb-1'>Trainee</h2>
          <h3 className='text-2xl'>Board Infinity</h3>
          <p><i>Trainee at BI as a Fullstack developer - acquried knowledge on Fullstack development technologies viz., ReactJs, Nodejs ,ExpressJs , MongoDB and others.  </i></p>
          <p><i>Here we developed various projects as a team and as individual.</i></p>
          
        </span>
      </li>

      
    </ol>
  </div>
</div>


</section>

  </div>
</div>

{/*projects */}

<section>
<span className="relative flex justify-center mt-9 mb-9">
  <div
    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-75"
  ></div>

  <span className="relative z-10 mb-3 mt-3 bg-gray-900 px-6 font-burtons text-3xl">Projects</span>
</span>
<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
  <div className=" rounded-lg bg-gray-900">
    {/* project-1 */}
    <a href="https://cthralu.netlify.app/" target='_blank'>
    <article className="group">
  <Image
    alt="Lava"
    src={C1}
    className="h-56 w-full border rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
  />
  <div className="p-4">
      <h3 className="text-lg font-medium text-gray-300">C-thralu</h3>
    <div className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
    <p >
      C-thralu web Application shows the movie details
      </p>
        <p>It is API based application</p>
        <p>Using ReactJs and Tailwindcss majiorly</p>
        <p>Fully Responsive website</p>
    </div>  
  </div>
</article>
</a>
 
  </div>
  <div className=" rounded-lg bg-gray-900">
    {/* project-2 */}
    <a href="#" target='_blank'>
    <article className="group  ">
  <Image
    alt="Lava"
    src={P1}
    className="h-56 border w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
  />
  <div className="p-4">
      <h3 className="text-lg font-medium text-gray-300">Rohith portfolio</h3>
    <div className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
    <p >
      This is my own portfolio which shows my skills,experience and projects
      </p>
        <p>Next.js is used in this project</p>
        <p>Using ReactJs and Tailwindcss majiorly</p>
        <p>Fully Responsive website</p>
    </div>  
  </div>
</article>
</a>
  </div>
  
</div>

</section>
<hr className='mb-2 mt-9 text-gray-300 opacity-15' />

<section>
<nav className='py-10 mb-10 flex justify-between'>
          <a href='#T1'>
          <Image  src={RImage} alt='Letter' className='h-8 w-8 bg-black rounded-lg' />
          </a>
          
          <ul className=' flex items-center'>
            <li className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-lg font-extrabold text-transparent  '>gmail: rohiths2613@gmail.com</li>
            
           
          </ul>
          <ul className=' flex items-center'>
            <li className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-lg font-extrabold text-transparent  '>ph.no : 9392398750</li>
            
           
          </ul>
        </nav>
</section>


    </main>
  )
}
