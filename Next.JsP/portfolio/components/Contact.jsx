import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "308bdc91-8c38-4fe4-86f3-f38a307b8002");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-cover bg-center" >
      <h4 className="mb-2 text-lg font-ovo text-gray-600 text-center">
        Contact with Me
      </h4>

      <h2 className="text-4xl sm:text-5xl font-ovo font-semibold text-gray-700 text-center">
        Get in touch
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-6 mb-12 font-ovo text-gray-700">
        I'd love to hear from you! Whether you have a question about my services,
        want to discuss a potential project, or just want to say hello, feel free to reach out.
      </p>

      <form  onSubmit={onSubmit} className="max-w-2xl mx-auto">
            {/* Name + Email on the same line */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
                <input type="text" placeholder="Enter your name" name='name' required 
                className="p-3 outline-none border border-gray-400 rounded-md bg-white w-full"/>
                <input type="email" placeholder="Enter your email" name='email' required
                className="p-3 outline-none border border-gray-400 rounded-md bg-white w-full" />
            </div>

            <textarea rows="6" placeholder="Enter your message" name='message' required
                className="p-3 outline-none border border-gray-400 rounded-md bg-white w-full" ></textarea>
            <button type="submit"
                className="w-max flex items-center justify-center py-3 px-10 mx-auto my-10 gap-2 text-gray-700 font-ovo border border-gray-700 rounded-full hover:bg-[#daebe8] hover:text-black duration-500" >
              Send Message
              <Image src={assets.right_arrow_bold} alt='Send icon' className='w-4'/>
            </button>

            <p className='mt-4'>{result}</p>

        </form>


    </div>
  )
}

export default Contact;
