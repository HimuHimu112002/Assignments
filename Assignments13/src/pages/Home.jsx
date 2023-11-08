import React from "react";
import Button from "../components/Button";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Hooks from "../components/Hooks";
const Home = () => {



  return (
    <>
      <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/images/hero.jpg')] bg-cover bg-no-repeat ">
        <div className=" w-full lg:w-2/3 space-y-5">
          <h1 className=" text-backgroundColor font-semibold text-4xl mt-20">
            This is blog web application
          </h1>
          <div>
          
            <p className=" text-backgroundColor mt-6 mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis et
              qui, maxime assumenda repellat corrupti officia dolorum delectus
              labore deleniti? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quis et qui, maxime assumenda repellat corrupti
              officia dolorum delectus labore deleniti?
            </p>

            <div className=" lg:pl-44">
              <div className=" flex justify-center lg:justify-start mt-5">
                <Button title="Learn More" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Hooks/>
      <Features />
      <Testimonials />
    </>
  );
};

export default Home;
