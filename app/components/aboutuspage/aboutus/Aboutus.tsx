import React from 'react';
import Image from 'next/image';

const PrepAcademyTransform = () => {
  const gladiators = [
    {
      name: 'Maria Thomas',
      title: 'CAT Analyst',
      image: '/gladiator1.png'
    },
    {
      name: 'Jeffin George',
      title: 'CAT Attempt',
      image: '/gladiator.png'
    },
    {
      name: 'Rose Alvez',
      title: 'CAT Architect',
      image: '/gladiator3.png'
    },
    {
      name: 'Raj Takur',
      title: 'CAT Method',
      image: '/gladiator4.png'
    }
  ];

  return (
    <div className="w-full bg-black text-white">
      {/* Transform Section */}
      <section className="bg-gradient-to-b py-10 md:py-14 px-4 md:px-8">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
    
    {/* Content */}
    <div className="w-full md:w-3/5 mb-8 md:mb-0 md:pr-6">
    <h2 className="font-serif italic text-[#FF6B45] text-3xl md:text-4xl mb-2">
    We Don&apos;t Just Teach
</h2>

<h3 className="font-serif italic text-3xl md:text-4xl font-bold mb-5">We Transform!</h3> 

  
  <p className="text-gray-300 text-base md:text-lg mb-6 max-w-lg">
    Welcome to Prep Academy - where dreams take flight and success isn&apos;t just a destination, 
    but a way of learning. Whether you&apos;re chasing the CAT, MAT, GMAT, XAT, SAT, or CSAT dream, 
    we&apos;ve got your back with experienced mentors, smart strategies, and a learning experience 
    that&apos;s anything but ordinary.
  </p>

  <ul className="space-y-2">
    {[
      "No Boring Lectures",
      "No One-Size-Fits-All Learning",
      "No More Guesswork",
    ].map((feature, index) => (
      <li key={index} className="flex items-center">
        <div
          className="w-4 h-4 rounded-full flex-shrink-0 mr-2"
          style={{
            backgroundImage: "url('/aboutusverified.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <span className="text-sm md:text-base">{feature}</span>
      </li>
    ))}
  </ul>
</div>


    {/* Mascot Image */}
    <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-8 relative bg-[url('/bannerround.png')] bg-cover bg-center bg-no-repeat">
      <div className="relative w-72 h-[26rem] md:w-[26rem] md:h-[30rem]">
        <Image
          src="/prepbannerlogo.png"
          alt="Prep Academy Mascot"
          layout="fill"
          objectFit="contain"
          priority
          className="mt-20"
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute w-full top-full mt-0">
  <div className="absolute w-full right-3/4 transform -translate-x-1/2 -translate-y-1/2 
                bg-gradient-to-r from-[#2A1810] to-[#3A2820] bg-opacity-90 text-center
                border-l-4 border-[#FF6B45] rounded-lg overflow-hidden
                shadow-lg px-6 py-4 mb-3">
    <p className="relative z-10">
      <span className="block text-[#FF6B45] font-bold text-xs md:text-base mb-1">
        At Prep Academy, We Turn Preparation Into An Adventure.
      </span>
      <span className="inline-block text-amber-300 font-extrabold text-sm md:text-lg mt-1 animate-pulse">
        Are You Ready?
      </span>
    </p>
    <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF6B45] opacity-10 rounded-full -mr-8 -mt-8"></div>
    <div className="absolute bottom-0 left-0 w-12 h-12 bg-amber-300 opacity-10 rounded-full -ml-6 -mb-6"></div>
  </div>
</div>
    </div>

  </div>
</section>


      
      {/* Gladiators Section */}
      <section className="w-full bg-gradient-to-b from-[#1a0e0e] to-[#241010] py-20 px-8 relative">
  {/* Section Header - Updated for Responsive Layout */}
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left mt-8 px-8">
    {/* Left Side - Title & Subtitle */}
    <div className="flex items-center">
      <h2 className="font-serif italic text-[#FF6B45] text-2xl md:text-3xl md:mr-3">
        Meet Your Exam <br /><span className='text-3xl md:text-5xl font-bold text-white'>Gladiators</span>
      </h2>
      {/* <h3 className="text-3xl md:text-5xl font-bold text-white">
        Gladiators
      </h3> */}
    </div>

    {/* Right Side - Description */}
    <h4 className="text-gray-300 text-sm md:text-lg max-w-md md:max-w-lg  md:text-right mt-4 md:mt-0">
  Behind every student&apos;s success is a passionate, experienced, and dedicated educator who&apos;s cracked the toughest exams themselves.
</h4>
  </div>

  {/* Gladiators Grid */}
  <div className="max-w-7xl mx-auto mt-20">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {gladiators.map((gladiator, index) => (
        <div key={index} className="flex flex-col items-center p-8 rounded-lg bg-gradient-to-b from-[#1a0e0e] to-[#241010] shadow-lg">
          <div className="w-52 h-52 relative overflow-hidden rounded-full mb-6">
            <Image
              src={gladiator.image}
              alt={gladiator.name}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <h4 className="font-semibold text-xl text-white">{gladiator.name}</h4>
          <p className="text-[#FF6B45] text-sm">{gladiator.title}</p>
        </div>
      ))}
    </div>
    {/* Additional Information Section */}


  </div>



</section>
<div className="w-full bg-[#1a0e0e] py-4">
  <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center items-center text-white text-sm md:text-base">
    
    <span className="mx-2 flex items-center">
      Top-Ranked Faculty
      <span 
        className="w-4 h-4 bg-contain bg-no-repeat bg-center ml-2" 
        style={{ backgroundImage: "url(/lightning.svg)" }} 
      ></span>
    </span>

    <span className="mx-2 flex items-center">
      Master Trainers
      <span 
        className="w-4 h-4 bg-contain bg-no-repeat bg-center ml-2" 
        style={{ backgroundImage: "url(/lightning.svg)" }} 
      ></span>
    </span>

    <span className="mx-2 flex items-center">
      Gurus
      <span 
        className="w-4 h-4 bg-contain bg-no-repeat bg-center ml-2" 
        style={{ backgroundImage: "url(/lightning.svg)" }} 
      ></span>
    </span>

    <span className="mx-2 flex items-center">
      One-On-One Mentorship
      <span 
        className="w-4 h-4 bg-contain bg-no-repeat bg-center ml-2" 
        style={{ backgroundImage: "url(/lightning.svg)" }} 
      ></span>
    </span>

    <span className="mx-2 flex items-center">
      Zero Sugarcoating
      <span 
        className="w-4 h-4 bg-contain bg-no-repeat bg-center ml-2" 
        style={{ backgroundImage: "url(/lightning.svg)" }} 
      ></span>
    </span>

    <span className="mx-2 flex items-center">
      Brutal Honesty & Proven Strategies
      <span 
        className="w-4 h-4 bg-contain bg-no-repeat bg-center ml-2" 
        style={{ backgroundImage: "url(/lightning.svg)" }} 
      ></span>
    </span>

  </div>
</div>


    </div>
  );
};

export default PrepAcademyTransform;