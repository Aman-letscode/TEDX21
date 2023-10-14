import React from 'react';

const Tickets = () => {
  return (
    <div className="container mx-auto py-8 bg-black">
      {/* Header */}
      <div className="bg-zinc-800 text-white p-4  rounded-md shadow-lg">
        <h1 className="text-3xl font-bold">Register Now !! Only 100 seats available</h1>
      </div>

      {/* Offer Div */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* First Offer Card */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <p className="text-gray-700 line-through">Price of Ticket: 999</p>
          <p className="text-red-500 text-xl font-semibold">Special Offer: 699</p>
        </div>

        {/* Second Offer Card */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <p className="text-gray-700">Special Offer for WCE Students</p>
          <p className="text-gray-700 line-through">Price of Ticket: 999</p>
          <p className="text-red-500 text-xl font-semibold">Limited Time Offer: 499</p>
        </div>
      </div>

      {/* Instructions Div */}
      <div className="mt-4 bg-zinc-800 p-4 rounded-md shadow-md">
        <header className="text-2xl font-bold text-white">What You Will Receive</header>
        <ul className="list-disc pl-4 mt-2 text-white">
          <li >TedX Hamper</li>
          <li>Meal</li>
          <li>Ultimate Knowledge Experience, Let's meet on 21st Oct 2023</li>
        </ul>
      </div>
    </div>
  );
};

export default Tickets;
