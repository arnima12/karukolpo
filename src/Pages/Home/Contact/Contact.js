import React from "react";

function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden ">
      
      {/* Background image with low opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 -z-10"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/fYknsct4/karukolpo1.png')",
        }}
      ></div>

      {/* Main content container */}
      <div className="relative bg-white bg-opacity-70 rounded-3xl shadow-2xl max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* Contact Info Side */}
        <div className="p-10 bg-opacity-10 bg-black text-black flex flex-col justify-center rounded-l-3xl">
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight">
            Get in Touch
          </h2>
          <p className="mb-8 text-lg leading-relaxed opacity-90">
            We'd love to hear from you! Whether you have questions, feedback, or
            want to collaborate, reach out to us and we'll get back to you soon.
          </p>
          <div className="space-y-4 text-lg">
            <p><strong>Address:</strong> Pallabi,Mirpur,Dhaka</p>
            <p><strong>Phone:</strong> +880 123 456 789</p>
            <p><strong>Email:</strong> handmadelove@karukolpo.com</p>
          </div>
          {/* <div className="mt-10 flex space-x-6 text-2xl opacity-80">
            
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">ⓕ </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300"></a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">📸</a>
          </div> */}
        </div>

        {/* Contact Form Side */}
        <form className="p-10 bg-white rounded-r-3xl flex flex-col justify-center">
          <h3 className="text-3xl font-semibold mb-6 text-gray-800">Send Us a Message</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="mb-4 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="mb-4 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="mb-6 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 transition resize-none"
          />
          <button
            type="submit"
            className="bg-purple-700 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-purple-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
