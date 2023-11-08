import React, { useRef, useState,useEffect } from 'react'
import { SiWebpack } from "react-icons/si";
import { MdOutlineWebhook, MdOutlineWeb } from "react-icons/md";

const Hooks = () => {
  let myHeadLine = useRef();
  const [number, setNumber] = useState(0);
  const [Decrements, setDecrements] = useState(0);
  const [data, setData] = useState([]);


  const change = () => {
    myHeadLine.current.innerText = "This is useRef Hokks";
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="text-center py-5 ">

        <div className="mb-0 ">
          <h5 className="text-heading_color mb-0 "> Hooks</h5>
          <h1 className="text-2xl w-96 mx-auto leading-normal font-bold mb-0 p-0">
          All Hooks Implimentation
          </h1>
        </div>

        <div className="container items-center mx-auto py-36">

          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="  shadow-md hover:shadow-lg  duration-300 p-6 rounded-md bg-slate-50">
              <h1 className="text-2xl font-semibold text-green-900">
                useState
              </h1>
              <h1 className=" mt-14 text-xl font-semibold">
                Count : {number}
              </h1>
              <button
                onClick={() => setNumber(number + 1)}
                className="px-8 py-1 border-2 border-brightColor text-brightColor hover:bg-blue-700  brightColor hover:text-white transition-all rounded-full"
              >
                Increments
              </button>
            </div>

            <div className="  shadow-md hover:shadow-lg duration-300 p-6 rounded-md bg-yellow-100">
              <h1 className="text-2xl font-semibold text-green-900">
                useState
              </h1>
              <h1 className=" mt-14 text-xl font-semibold">
                Count : {Decrements}
              </h1>
              <button
                onClick={() => setDecrements(Decrements - 1)}
                className="px-8 py-1 border-2 border-brightColor text-brightColor hover:bg-blue-700  brightColor hover:text-white transition-all rounded-full"
              >
                Increments
              </button>
              <button
                onClick={() => setDecrements(Decrements + 1)}
                className="px-8 py-1 border-2 border-brightColor text-brightColor hover:bg-blue-700  brightColor hover:text-white transition-all rounded-full"
              >
                Decrements
              </button>
            </div>

            <div className="  shadow-md hover:shadow-lg duration-300 p-6 rounded-md bg-green-100">
              <div>
                <h1 className="text-2xl font-semibold text-green-900">
                  UseEffect
                </h1>

                <div className="pt-3">{JSON.stringify(data.title)}</div>
                <div className="pt-3">{JSON.stringify(data.description)}</div>
              </div>
            </div>

            <div className="  shadow-md hover:shadow-lg duration-300 p-6 rounded-md bg-blue-100">
              <div className=" ml-20 p-3 ">
                <h1
                  ref={myHeadLine}
                  className=" text-2xl font-semibold text-blue-700 pb-3"
                >
                  Click the button
                </h1>
                <button
                  onClick={change}
                  className="px-8 py-1 border-2 border-black text-brightColor hover:bg-blue-700  brightColor hover:text-white transition-all rounded-full"
                >
                  Click
                </button>
                
              </div>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Hooks