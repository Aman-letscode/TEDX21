import React from "react";

const Tickets = () => {
  return (
    <div className="container mx-auto py-8 bg-white" id="tickets" >
      {/* Header */}
      <div className="bg-white text-black p-4  rounded-md shadow-lg">
        <h1 className="text-3xl font-bold">
          Register Now !! Only 200 seats available
        </h1>
      </div>

      {/* Offer Div */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 ml-2 ">


        {/* First Offer Card */}
        <div className="bg-white p-4  border-2 border-black rounded-md shadow-md mt-4 sm:mt-0 sm:ml-4 m-2">
          <h1 className="text-black text-3xl font-semibold mb-4 sm:mb-0">
            For Spectators
          </h1>
          <div className="bg-balck p-4 rounded-md  flex flex-col sm:flex-row justify-around items-center">
            <p className="text-gray-700 text-2xl line-through">
              Price of Ticket: 799
            </p>
            <div className="flex flex-col sm:flex-row items-center">
              <p className="block py-2 pl-3 pr-4 text-red-500  text-3xl font-bold mt-4 sm:mt-0 sm:ml-4">
                Special Offer: 299
              </p>
              <a
                href="https://forms.gle/2pVe6L9cvSL2xKNo7"
                 className="ml-2  block py-2 pl-3 pr-4  rounded  text-white bg-red-600 font-semibold align-center"
              >
                Register Now
              </a>
             
            </div>
            
          </div>
          
        </div>

        {/* Second Offer Card */}
        <div className="bg-white p-4  border-2 border-black rounded-md shadow-md mt-4 sm:mt-0 sm:ml-4 m-2">
          <h1 className="text-black text-3xl font-semibold mb-4 sm:mb-0">
            For WCE Students
          </h1>
          <div className="bg-balck p-4 rounded-md  flex flex-col sm:flex-row justify-around items-center">
            <p className="text-gray-700 text-2xl line-through">
              Price of Ticket: 799
            </p>
            <div className="flex flex-col sm:flex-row items-center">
              <p className="block py-2 pl-3 pr-4 text-red-500  text-3xl font-bold mt-4 sm:mt-0 sm:ml-4">
                Special Offer: 249
              </p>
              <a
                href="https://forms.gle/tiWJjU13DycnAtN17"
                 className="ml-2  block py-2 pl-3 pr-4  rounded  text-white bg-red-600 font-semibold justify-center"
              >
                Register Now
              </a>
             
            </div>
            
          </div>
          <p>only access through your college Email</p>
        </div>
      </div>

      {/* Instructions Div */}
      <div className="mt-4 bg-white p-4 rounded-md shadow-md">
        <header className="text-2xl font-bold text-black">
          What You Will Receive
        </header>
        <ul className="list-disc pl-4 mt-2 text-black ml-3">
          <li>TedX Hamper</li>
          <li>Meal</li>
          <li>Ultimate Knowledge Experience, Let's meet on 21st Oct 2023</li>
        </ul>
      </div>
    </div>
  );
};

export default Tickets;
