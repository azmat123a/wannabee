import React from "react";
import logo from "./../../Assets/main_logo.png";
import centerImg from "./../../Assets/center_img.png";
import "./header.css";
export const Header = () => {
  return (
    <header className="bg-yellow-500 header">
      <div className="section1 flex flex-row">
        <div className="flex flex-1 logo">
          <img
            src={logo}
            alt="Logo"
            // className="h-22 w-22 mr-2 text-white flex"
          />
        </div>
        <div className="flex flex-1 items-center menu p-6 justify-start">
          <button className="bg-white text-black text-sm py-2 px-4 rounded-md mr-2">
            Home
          </button>
          <button className="bg-white text-black text-sm py-2 px-4 rounded-md mr-2">
            About us
          </button>
          <button className="bg-white text-black text-sm py-2 px-4 rounded-md mr-2">
            Services
          </button>
          <button className="bg-white text-black text-sm py-2 px-4 rounded-md mr-2">
            Blogs
          </button>
          <button className="bg-white text-black text-sm py-2 px-4 rounded-md mr-2">
            Careers
          </button>
          <button className="bg-white text-black text-sm py-2 px-4 rounded-md">
            Contact us
          </button>
        </div>
      </div>
      <div className="section2 flex flex-1 justify-center flex-col items-center">
        <h1 className="mb-12">Careers</h1>
        <img src={centerImg} alt="img" className="mt-n54" />
      </div>
    </header>
  );
};
