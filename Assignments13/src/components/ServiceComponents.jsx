import React from "react";
import { SiJsonwebtokens } from "react-icons/si";
import { SiWebhint, SiWebcomponentsdotorg, SiWebpack } from "react-icons/si";
import { MdOutlineWebhook, MdOutlineWeb } from "react-icons/md";

const ServiceComponents = () => {
  return (
    <>
      <div className="pt-20 text-center py-5 ">
        <div className="pt-20 mb-0 ">
          <h5 className="text-heading_color mb-0 ">Services</h5>
          <h1 className="text-2xl w-96 mx-auto leading-normal font-bold mb-0 p-0">
            This is Service components
          </h1>
        </div>
        <div className=" pt-20 container items-center mx-auto py-36">
          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="  shadow-md hover:shadow-lg  duration-300 p-6 rounded-md bg-slate-50">
              <div className="  border rounded-full inline-block p-4 border-slate-800 mb-3  ">
                <SiJsonwebtokens />
              </div>
              <h3 className="text-2xl  font-bold text-slate-800 ">
                Web Design
              </h3>
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                accusantium omnis odio quas eius repudiandae?
              </p>
            </div>
            <div className="  shadow-md hover:shadow-lg duration-300 p-6 rounded-md bg-yellow-100">
              <div className="  border rounded-full inline-block p-4 border-slate-800 mb-3  ">
                <SiWebhint />
              </div>
              <h3 className="text-2xl  font-bold text-slate-800 ">
                Web Development
              </h3>
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                accusantium omnis odio quas eius repudiandae?
              </p>
            </div>
            <div className="  shadow-md hover:shadow-lg duration-300 p-6 rounded-md bg-green-100">
              <div className="  border rounded-full inline-block p-4 border-slate-800 mb-3  ">
                <SiWebcomponentsdotorg />
              </div>
              <h3 className="text-2xl  font-bold text-slate-800 ">
                UI/UX Design
              </h3>
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                accusantium omnis odio quas eius repudiandae?
              </p>
            </div>
            <div className="  shadow-md hover:shadow-lg duration-300 p-6 rounded-md bg-blue-100">
              <div className="  border rounded-full inline-block p-4 border-slate-800 mb-3  ">
                <SiWebpack />
              </div>
              <h3 className="text-2xl  font-bold text-slate-800 ">
                App Development
              </h3>
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                accusantium omnis odio quas eius repudiandae?
              </p>
            </div>
            <div className="  shadow-md hover:shadow-lg duration-300 p-6 rounded-md bg-slate-50">
              <div className="  border rounded-full inline-block p-4 border-slate-800 mb-3  ">
                <MdOutlineWebhook />
              </div>
              <h3 className="text-2xl  font-bold text-slate-800 ">
                SEO
              </h3>
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                accusantium omnis odio quas eius repudiandae?
              </p>
            </div>
            <div className="  shadow-md hover:shadow-lg duration-300 p-6 rounded-md bg-pink-100">
              <div className="  border rounded-full inline-block p-4 border-slate-800 mb-3  ">
                <MdOutlineWeb />
              </div>
              <h3 className="text-2xl  font-bold text-slate-800 ">
                Artificial Service
              </h3>
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                accusantium omnis odio quas eius repudiandae?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceComponents;
