import React from 'react'
export default function Home() {
  return (
    <div className='home  pt-[1rem]'>
      {/* last slide of our indication */}
      <div className=" pt-[3rem] sm:pt-[2rem] flex-col sm:flex sm:flex-row  sm:rounded-tr-[2rem] sm:rounded-tl-[2rem] bg-black">
        <div className="qoutes p-10 rounded-tl-[2rem] rounded-br-[2rem] rounded-bl-[2rem] h-[30vh] sm:pt-[9rem] pl-1.5 sm:pl-[10rem]  font-[fantasy]  sm:items-center">
          <b className='text-[2rem] sm:text-[3rem] text-white font-[math]  sm:text-5xl'>In a single <span className='text-green-500'>seed</span> have a beautiful garden</b>
          <button className='sm:mt-[3rem] sm:ml-10 text-green-400 cursor-pointer bg-black hover:text-blue-500 font-[Merriweather] border-2 rounded-[0.2rem] p-[0.5rem]'><b>Join with seed of Idea</b></button>
        </div>
        <div className=" w-full sm:pr-[0%] md:pr-[0%] md:mt-[2rem]  ">
          <img className='' src="/Images/gSeeds/mind.png" alt="Not Available" />
        </div>e
      </div>
      {/* third slide of Uniqueness of Bloom */}
      <div className="flex-col mt-[-2rem]  sm:flex sm:flex-row sm:rounded-tr-[2rem] sm:rounded-tl-[2rem]">
        <div className="qoutes p-10 rounded-tr-[3rem] rounded-bl-[3rem] rounded-br-[3rem] pt-11 pl-1.5 sm:pl-[10rem]  font-[fantasy] s *: m:flex  sm:items-center bg-gradient-to-b from-black to-blue-900">
          <b className=' text-[1.3rem] text-white font-[math]  sm:text-5xl'>Bloom is a <span className='text-green-500'>Disctraction-Free Enviornment</span> social media plateform where you stay motivated and connected with person's who have like your goals.</b>
        </div>
        <div className="w-full  pt-[4.7%] pb-1.5  sm:pr-[0%] md:pr-[0%] md:mt-[2rem]">
          <img className='rotate-90  rounded-2xl' src="/Images/gSeeds/gardening.png" alt="Not Available" />
        </div>
      </div>

      {/* fourth slide of Privacy Goals Social Life*/}
      <div className="  mt-[-2rem]  sm:mt-5 flex-col sm:flex sm:flex-row rounded-t-2xl">
        <div className=" w-full  pt-[4.7%] pb-1.5   md:pr-[20%] md:mt-[2rem]  ">
          <img className='rotate-90 rounded-4xl  ' src="/Images/gSeeds/success.png" alt="Not Available" />
        </div>
        <div className="qoutes p-10 mr-1.5 rounded-tl-[3rem] rounded-tr-[4rem] rounded-bl-[4rem] pt-11 pl-1.5 sm:pl-[10rem]  font-[fantasy] s *: m:flex  sm:items-center bg-gradient-to-b from-black to-blue-900">
          <b className=' text-[1.3rem] text-white font-[math]  sm:text-5xl pt-[5rem]'>Goal-Oriented community <span className='text-green-500'>connect</span> with like-minded people</b>
        </div>
      </div>
      {/* fourth slide of Privacy Goals Social Life*/}

      <div className=" pt-[10rem] flex-col sm:flex sm:flex-row bg-radial-[at_100%_100%] from-[#0d68f1d3] via-[#e] to-20 sm:rounded-tr-[2rem] sm:rounded-tl-[2rem] bg-black">
        <div className="qoutes p-10 mr-1.5 rounded-tr-[5rem] pt-11 pl-1.5 sm:pl-[10rem]  font-[fantasy] s *: m:flex  sm:items-center bg-gradient-to-b from-black to-blue-900">
          <b className=' text-[1.3rem] text-white font-[math]  sm:text-5xl'>to achieve your goals we provide<span className='text-green-500'> Trained AI bots</span> </b>
        </div>
        <div className=" w-full sm:pr-[0%] md:pr-[0%] md:mt-[2rem]  ">
          <img className='rounded-2xl ' src="/Images/gSeeds/ai.jpg" alt="Not Available" />
        </div>
      </div>

    </div>

  )
}
