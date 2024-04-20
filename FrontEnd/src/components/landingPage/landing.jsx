import React from "react";
import logo from "../images/Logo.png";
import Service from "../images/Landing/Service.png"
import AboutUs from "../images/Landing/About Us.png"
import Courses from "../images/Landing/Courses.png"

// import Card from "./Card/card";


const colors = {
  primary: "#FFFFFF",
  secondary: "#FAFAFA",
  buttons: "#968BC9",
  text: "8a8a8a"
};

function Landing() {
  return (
    <div className="flex bg-[#F4F0FF]">

      <div className="bg-white text-black w-64 p-4 rounded-3xl flex flex-col font-sans">
        {/* Center the image and make it smaller */}
        <img src={logo} className="w-40 mt-4 mb-6" alt="Logo" />
        <ul>

          <li className="flex items-center mb-2 hover:bg-[#dcd4ff] rounded-md p-3">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-[#8a8a8a]">
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </span>
            <a href="#" className="text-[#8a8a8a] font-medium">
              Home
            </a>
          </li>

          <li className="flex items-center mb-2 hover:bg-[#dcd4ff] rounded-md p-3">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6  fill-[#8a8a8a]">
                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
              </svg>

            </span>
            <a href="#" className="text-[#8a8a8a] font-medium">
              Dashboard
            </a>
          </li>
          <li className="flex items-center mb-2 hover:bg-[#dcd4ff] rounded-md p-3">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-[#8a8a8a]">
                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
              </svg>

            </span>
            <a href="#" className="text-[#8a8a8a] font-medium">
              Courses
            </a>
          </li>

          <li className="flex items-center mb-2 hover:bg-[#dcd4ff] rounded-md p-3">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-[#8a8a8a]">
                <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clipRule="evenodd" />
              </svg>

            </span>
            <a href="#" className="text-[#8a8a8a] font-medium">
              Quizzes
            </a>
          </li>
          <li className="flex items-center mb-2 hover:bg-[#dcd4ff] rounded-md p-3">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-[#8a8a8a]">
                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
              </svg>

            </span>
            <a href="#" className="text-[#8a8a8a] font-medium">
              Account
            </a>
          </li>

          <li className="flex items-center mb-2 hover:bg-[#dcd4ff] rounded-md p-3">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-[#8a8a8a]">
                <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                <path fill-rule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clip-rule="evenodd" />
                <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
              </svg>

            </span>
            <a href="#" className="text-[#8a8a8a] font-medium">
              Packages
            </a>
          </li>

        </ul>
      </div>

      {/* Main Content */}
      <main className="flex-grow p-8">
        {/* Header Section */}
        <header>
          <div className="absolute top-0 right-0 p-4 flex space-x-4">
            <button className="bg-[#968BC9] hover:bg-[#605d70] text-white py-0 px-8 rounded-sm">Join Now</button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 fill-[#8a8a8a]">
                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <img src={AboutUs} className="w-130 justify-center" alt="About" />
        </header>

        <br /><br />

        {/* Service Section */}
        <section className="flex  flex-col justify-center items-center flex-grow">
          <h3 className="text-2xl font-bold">OUR SERVICE</h3>
          <img src={Service} className="w-120 justify-center" alt="Service" />
        </section>
<br /><br /><br /><br /><br />

<section className="flex justify-center flex-grow gap-8">
  <div className="relative flex flex-col w-64 rounded-xl bg-white text-gray-700 shadow-md">
    <div className="relative mx-4 -mt-6 h-32 overflow-hidden rounded-t-xl bg-blue-gray-500 text-white shadow-lg shadow-blue-gray-500/40">
    <img src={Courses}/>
    </div>
    <div className="p-4">
      <h5 className="mb-2 block font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
       Courses
      </h5>
      <p className="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
        Acess Hundreds of Courses for free and with paid bundles.
      </p>
    </div>
    <div className="p-4 pt-0">
      <button
        data-ripple-light="true"
        type="button"
        className="select-none rounded-lg bg-[#968BC9] py-2 px-4 text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Read More
      </button>
    </div>
  </div>
 
</section>


{/* <Card></Card> */}


      </main>
    </div>
  );
}

export default Landing;
