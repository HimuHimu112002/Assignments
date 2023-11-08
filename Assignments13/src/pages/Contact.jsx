import React from "react";
import Heading from "../components/Heading";

const Contact = () => {

  return (
    <>
      <div className="min-h-screen d-flex justify-center items-center lg:px-32 px-5 pt-10">

        <div className="text-center font-semibold text-4xl text-yellow-700  lg:justify-center items-center pt-10">
          <Heading title1="Contact Us? " />
        </div>

        <div className=" my-10 border p-10 flex flex-col md:flex-row justify-between w-full">
          <form className=" w-full md:w-2/5 space-y-5 pt-20">
            <div className=" flex flex-col">
              <label htmlFor="userName">Your Name</label>
              <input
                className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                type="text"
                name="userName"
                id="userName"
                placeholder="enter your name"
              />
            </div>
            <div className=" flex flex-col">
              <label htmlFor="userEmail">Your Email</label>
              <input
                
                className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="enter your email"
              />
            </div>
            <div className=" flex flex-col">
              <label htmlFor="userNumber">Your Number</label>
              <input
                
                className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                type="text"
                name="userNumber"
                id="userNumber"
                placeholder="enter your number"
              />
            </div>

            <div className=" flex flex-row justify-center">
              <div className=" flex justify-center lg:justify-start">
                <button
                  
                  className=" px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-blue-700 brightColor hover:text-white transition-all rounded-full"
                >
                  Click
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </>
  );
};

export default Contact;
