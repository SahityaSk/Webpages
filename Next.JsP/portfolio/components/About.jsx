import { assets, infoList } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-16 scroll-mt-20">
        <div className="text-center">
            <h4 className="mb-2 text-lg font-ovo text-gray-600">
                Introduction</h4>
            <h2 className="text-4xl sm:text-5xl font-ovo font-semibold text-gray-700">
                About Me
            </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 mt-16">
            <div className="w-64 sm:w-80 rounded-3xl overflow-hidden shadow-lg">
                <Image
                    src={assets.user_image} alt="user"
                    className="w-full rounded-3xl object-cover"/>
            </div>

            <div className="flex-1 text-center lg:text-left">
                <p className="mb-10 max-w-2xl mx-auto lg:mx-0 font-ovo text-gray-700 leading-relaxed">
                    I am a fresher Full Stack Developer with over 1 year of professional
                    expertise in the field. Throughout my career, I have demonstrated a
                    strong ability to adapt and learn new technologies quickly. I am
                    passionate about building efficient and scalable web applications that
                    deliver exceptional user experiences.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0">
                    {infoList.map(({ icon, title, description }, index) => (
                    <li key={index}
                        className="border border-gray-300 rounded-xl p-6 hover:shadow-md transition cursor-pointer">
                        <Image src={icon} alt={title} className="w-7 mt-2" />
                        <h3 className="my-3 font-semibold text-gray-800">{title}</h3>
                        <p className="text-gray-600 text-sm">{description}</p>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About;
