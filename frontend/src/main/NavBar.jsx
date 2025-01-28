import { useState } from "react";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  
  const toggle = () => {
    setIsVisible(prevState => !prevState);
  }
  return (
    <div className={`navbar w-[100vw] z-[1000] bg-[#0000005b] fixed backdrop-blur-3xl ${isVisible ? "h-fit" : "[3rem] flex justify-between items-center sm:h-20 "}`}>
      <b className="text-yellow-50 curson:pointer text-4xl ml-2.5 font-[math] ">Bloom</b>
      <ul className="flex flex-col items-end mr-[1.5rem] sm:flex sm:flex-row sm:justify-end sm:w-[77vw]">
        <li className="group mt-4 cursor-pointer  sm:hidden " onClick={toggle}>
          <div className="bottle-lines space-y-1.5 mt-[-1rem] p-[1rem] sm:hidden ">
            <div className="w-10 h-1 bg-white opacity-70"></div>
            <div className="w-10 h-1 bg-white opacity-70"></div>
            <div className="w-10 h-1 bg-white opacity-70"></div>
          </div>
        </li>

        {['Home','About', 'Sign In', 'Log In', 'Support', 'Mentorship'].map((item, index) => (
          <li key={item} className={`nav-item cursor-pointer text-white text-2xl mt-3 float-right ${!isVisible && 'hidden'} sm:block  sm:mr-[.7rem] sm:text-[1.2rem] sm:font-[math] md:mr-[2rem] lg:mr-[3rem]`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
