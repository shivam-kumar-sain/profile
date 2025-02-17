// src/components/Content.tsx
import React from 'react';
import Image from 'next/image';


const Content = () => {
    return (
        <main className="space-y-8">
            {/* Home Section */}
            <section
                id="home"
                className="min-h-screen flex items-center justify-center 
             bg-gradient-to-r from-purple-900 via-indigo-700 to-blue-500
             scroll-mt-16 p-2"
            >
                <div className="text-center text-white">
                    <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
                    <p>I'm a passionate developer who loves building amazing things.</p>
                </div>
            </section>


            {/* About Section */}
            <section id="about" className="bg-gray-900 text-white py-16 px-6 relative">
                <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
                    {/* Image Section (Now on Top in Mobile View) */}
                    <div className="md:w-1/2 flex justify-center relative md:-top-10">
                        <Image
                            src="developer2.png"
                            alt="Profile"
                            className="w-80 md:w-96 h-auto rounded-2xl border-2 border-teal-500 shadow-lg"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h3 className="text-teal-400 text-lg font-semibold">About Me</h3>
                        <h2 className="text-3xl font-bold mt-2">Professional Website Designer</h2>
                        <p className="mt-4 text-gray-300">
                            Hello! I’m Magret, a passionate website designer dedicated to crafting beautiful and
                            functional websites that help businesses thrive online. With a keen eye for detail and
                            a love for design, I transform ideas into engaging digital experiences.
                        </p>
                        <button className="mt-6 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg text-lg transition-all">
                            Learn more →
                        </button>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section
                id="projects"
                className="min-h-screen flex items-center justify-center bg-[#2E236C] scroll-mt-16 p-2"
            >
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4 text-[#C8ACD6]">Projects</h2>
                    <p className="text-[#C8ACD6]">Here are some of the projects I've worked on:</p>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-[#17153B] p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-[#C8ACD6]">Project 1</h3>
                            <p className="text-[#C8ACD6]">A responsive e-commerce website.</p>
                        </div>
                        <div className="bg-[#17153B] p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-[#C8ACD6]">Project 2</h3>
                            <p className="text-[#C8ACD6]">A task management app.</p>
                        </div>
                        <div className="bg-[#17153B] p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-[#C8ACD6]">Project 3</h3>
                            <p className="text-[#C8ACD6]">A portfolio website.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="min-h-screen flex items-center justify-center bg-[#433D8B] scroll-mt-16 p-2"
            >
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4 text-[#C8ACD6]">Contact Me</h2>
                    <p className="text-[#C8ACD6]">Feel free to reach out to me!</p>
                    <form className="mt-6 max-w-md mx-auto">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 mb-4 rounded-lg border border-[#C8ACD6] bg-[#17153B] text-[#C8ACD6] focus:outline-none focus:ring-2 focus:ring-[#C8ACD6]"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 mb-4 rounded-lg border border-[#C8ACD6] bg-[#17153B] text-[#C8ACD6] focus:outline-none focus:ring-2 focus:ring-[#C8ACD6]"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-3 mb-4 rounded-lg border border-[#C8ACD6] bg-[#17153B] text-[#C8ACD6] focus:outline-none focus:ring-2 focus:ring-[#C8ACD6]"
                            rows={4}
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-[#2E236C] text-[#C8ACD6] p-3 rounded-lg hover:bg-[#433D8B] transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Content;