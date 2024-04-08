import React from 'react';
import logo from "../images/Logo.png";


const colors = {
    primary: "#FFFFFF",
    secondary: "#FAFAFA",
    buttons: "#968BC9",
};


function Landing() {
    return (
        <div className="flex bg-[#F4F0FF]">
            {/* Sidebar */}
            <aside className="bg-white text-white w-64 p-4 rounded-3xl flex flex-col items-center">
                {/* Center the image and make it smaller */}
                <img src={logo} className="w-40 mt-4 mb-6" alt="Logo" />
                <ul>
                    <li className="mb-2"><a href="#" className="text-blue-500 hover:text-blue-400">Home</a></li>
                    <li className="mb-2"><a href="#" className="text-blue-500 hover:text-blue-400">Dashboard</a></li>
                    <li className="mb-2"><a href="#" className="text-blue-500 hover:text-blue-400">Quizzes</a></li>
                    <li className="mb-2"><a href="#" className="text-blue-500 hover:text-blue-400">Account</a></li>
                    <li className="mb-2"><a href="#" className="text-blue-500 hover:text-blue-400">Packages</a></li>
                </ul>
            </aside>


            {/* Main Content */}
            <main className="flex-grow p-8">

                <header className="bg-gray-800 text-white p-4">
          <h1 className="text-2xl font-bold">Welcome to My Landing Page</h1>
          <p>This is a basic example of a landing page built with React and Tailwind CSS.</p>
        </header>
        <section className="bg-blue-500 text-white p-8">
          <h2 className="text-3xl font-bold mb-4">Discover Our Amazing Product</h2>
          <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida libero nec suscipit tristique.</p>
          <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded hover:bg-blue-400 hover:text-white">Learn More</button>
        </section>
        <section className="p-8">
          <h2 className="text-3xl font-bold mb-4">Features</h2>
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">Feature 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">Feature 2</h3>
            <p>Ut gravida libero nec suscipit tristique.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">Feature 3</h3>
            <p>Sed euismod lacus non justo tristique, nec hendrerit elit rhoncus.</p>
          </div>
        </section>
            </main>
        </div>
    );
}

export default Landing;
