import React from 'react'
import Plx from "react-plx";
export default function Home() {
  const HeadPlx = [
    {
      start: `self`,
      end: `100`,
      properties: [
        {
          startValue: -100, // Start from left
          endValue: 100, // Move to original position
          property: 'translateX',
        },
        {
        startValue: 0, // Start with opacity 0
          endValue: 1, // Fade in to opacity 1
          property: 'opacity',
        },
      ],
    },
  ];
  const FstBtn = [
    {
      start: self,
      end: 100,
      properties: [
        {
          startValue: 0,
          endValue: 20,
          property: "blur",
          duration: 4000,
        }
      ]
    },
  ];
  const Qotes = [
    {
      start: self,
      end: 100,
      properties: [
        {
          startValue: 0,
          endValue: 300,
          property: "translateX",
          duration: 4000,
        }
      ]
    },
  ];
  return (
    <div className='home  pt-[1rem] '>
      {/* first slide of our intro */}
      <Plx parallaxData={FstBtn}  className=" relative pt-[3rem] md:pt-[8rem] flex-col md:flex md:flex-row  md:rounded-tr-[2rem] md:rounded-tl-[2rem] bg-[#00000058]"
      style={{animation:'rightSwipe',animationDuration:'8s', animationFillMode:'forwards',}}
      >
        <div className=" qoutes p-10 rounded-tl-[2rem] rounded-br-[2rem] rounded-bl-[2rem] h-[30vh] sm:pt-[9rem] pl-1.5 sm:pl-[10rem]  font-[fantasy]  sm:items-center w-full">
          <b className='text-[3rem] md:text-[2rem] text-white font-[math]  sm:text-5xl'>In a single <span className='text-green-500'>seed</span> have a beautiful garden</b>
          <button className='sm:mt-[3rem] sm:ml-10  text-white text-2xl cursor-pointer bg-blue-500 hover:bg-indigo-600 font-[Merriweather] rounded-full w-full p-[0.5rem]'><b>Join with seed of Idea</b></button>
        </div>

        <div className=" w-full sm:pr-[0%] md:pr-[0%] md:mt-[2rem]">
          <img className='' src="/Images/gSeeds/mind.png" alt="Not Available" />
        </div>
      </Plx>
      {/* second slide of Uniqueness of Bloom */}
      <div className="flex-col Plx--active mt-[-2rem]  sm:flex sm:flex-row sm:rounded-tr-[2rem] sm:rounded-tl-[2rem] bg-[black]">
        <Plx parallaxData={Qotes} className="qoutes p-2 sm:p-10  md:p-48 rounded-tr-[3rem] rounded-br-[3rem] pt-11 pl-1.5 sm:pl-[10rem]  font-[fantasy] s *: m:flex  sm:items-center bg-gradient-to-b from-[#388396] to-blue-900">
          <b className=' text-[1rem] sm:text[1.3rem] md:text-3xl text-white font-[math]  '>Bloom is a <span className='text-green-500'>Disctraction-Free Enviornment</span> social media plateform where you stay motivated and connected with person's who have like your goals.</b>
        </Plx>
        <div className="w-full pt-[5rem] sm:pt-[4.7%] pb-1.5  sm:pr-[0%] md:pr-[0%] md:mt-[2rem]">
          <img  style={{animation:'rightSwipe',animationDuration:'8s', animationFillMode:'forwards', animationIterationCount:"1"}} className='animated-div rotate-90 border-[5px] rounded-2xl hover:scale-110' src="/Images/gSeeds/gardening.png" alt="Not Available" />
        </div>
      </div>

      {/* third for goal*/}
      <div className="mt-[-2rem]  sm:mt-5 flex-col sm:flex sm:flex-row rounded-t-2xl white">
        <div className=" w-full pt-[5rem] sm:pt-[4.7%] pb-1.5   md:pr-[20%] md:mt-[2rem] ">
          <img style={{animation:'rightSwipe',animationDuration:'8s', animationFillMode:'forwards', animationIterationCount:"1"}} className=' animated-div rotate-90 rounded-4xl border-[5px] animate-bounce hover:scale-110  ' src="/Images/gSeeds/success.png" alt="Not Available" />
        </div>
        <div style={{animation:'rightSwipe',animationDuration:'8s', animationFillMode:'forwards', animationIterationCount:"1"}} className=" animated-div qoutes sm:mt-3rem p-10 mt-[2rem] mr-1.5 rounded-tl-[3rem] rounded-tr-[4rem] rounded-bl-[4rem] pt-11 pl-1.5 sm:pl-[10rem]  font-[fantasy] s *: m:flex  sm:items-center bg-gradient-to-b from-black to-blue-900">
          <b className=' text-[1.3rem] md:text[1rem] text-white font-[math]  sm:text-5xl pt-[5rem]'>Goal-Oriented community <span className='text-green-500'>connect</span> with like-minded people</b>
        </div>
      </div>
      {/* fourth for support*/}

      <div className="sm:pt-[10rem] flex-col sm:flex sm:flex-row bg-radial-[at_100%_100%]  sm:rounded-tr-[2rem] sm:rounded-tl-[2rem] bg-[#00020a]"
      >
        <div className="qoutes p-10 mr-1.5 rounded-tr-[5rem] pt-11 pl-1.5 sm:pl-[10rem]  font-[fantasy] s *: m:flex  sm:items-center bg-gradient-to-b from-black to-blue-900">
          <b  className=' text-[1.3rem] text-white font-[math]  sm:text-5xl'>to achieve your goals we provide<span className='text-green-500'> Trained AI bots</span> </b>
        </div>
        <div className=" w-full sm:pr-[0%] md:pr-[0%] md:mt-[2rem]  ">
          <img className='rounded-2xl mb-10 ' src="/Images/gSeeds/ai.jpg" alt="Not Available" />
        </div>
      </div>

    </div>

  )
}
