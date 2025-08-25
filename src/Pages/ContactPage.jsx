import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-20 flex flex-col items-center justify-center px-4">
      <div className="shadow-lg bg-gray-100 rounded-lg p-8 w-full max-w-xl">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h1>
        <div className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block font-medium text-gray-700"
            >
              Name
            </label>
            <input
            autoComplete='off'
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-medium text-gray-700"
            >
              Email
            </label>
            <input
            autoComplete='off'
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-6 block mx-auto rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
