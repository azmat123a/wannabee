import React from "react";
import logo from "./../../Assets/main_logo.png";
import ph from "./../../Assets/phone.png";
import mail from "./../../Assets/mail.png";
import location from "./../../Assets/location.png";
import copyright from "./../../Assets/copyright.png";
import bee from "./../../Assets/bee.png";

import fb from "./../../Assets/social-icons/facebook.png";
import instagram from "./../../Assets/social-icons/instagram.png";
import youtube from "./../../Assets/social-icons/youtube.png";
import twitter from "./../../Assets/social-icons/twitter.png";
import linkedin from "./../../Assets/social-icons/linkedin.png";

import "./footer.css";
const Footer = () => {
  return (
    <div className="footer flex flex-col ">
      <div className="flex justify-center items-center -mt-12">
        <img src={bee} alt="phone" className="w-14 h-14 mr-2" />
        <img src={bee} alt="phone" className="w-24 h-24 mr-2" />
        <img src={bee} alt="phone" className="w-14 h-14 mr-2" />
      </div>
      {/* Section1 start */}
      <div className="flex section1 mb-10">
        <div className="flex flex-1 flex-col items-start left">
          <img src={logo} alt="logo" />
          <h1 className="self-start">Bringing more buzz to your brand!</h1>
        </div>

        <div className="flex flex-1 flex-col items-center mt-10 center">
          <ul className="text-left">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Blogs</li>
            <li>Career</li>
            <li>Our portfolio</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col items-start mt-12 right">
          <h1 className="text-left mb-3">Contact us:</h1>
          <div className="flex items-center mb-3">
            <img src={ph} alt="phone" className="w-10 h-10 mr-2" />
            <span className="text-sm">0992 320982</span>
          </div>
          <div className="flex items-center">
            <img src={mail} alt="mail" className="w-10 h-10 mr-2" />
            <span className="text-sm">bee@gmail.com</span>
          </div>
        </div>
      </div>
      {/* Section1 end */}
      {/* Section2 start */}
      <div className="flex section2 bg-white pt-5 pb-5">
        <div className="flex basis-1/3 flex-col items-start pl-16">
          <h1>You can find us on:</h1>
          <div className="flex">
            <img src={fb} alt="mail" className="w-10 h-10 mr-2" />
            <img src={instagram} alt="mail" className="w-10 h-10 mr-2" />
            <img src={youtube} alt="mail" className="w-10 h-10 mr-2" />
            <img src={twitter} alt="mail" className="w-10 h-10 mr-2" />
            <img src={linkedin} alt="mail" className="w-10 h-10 mr-2" />
          </div>
        </div>
        <div className="flex flex-1 ">
          <div className="flex items-center">
            <img src={location} alt="mail" className="w-8 h-10 mr-2 mb-6" />
            <span className="text-sm text-left leading-tight ">
              Yeoford Way, Marsh Barton, Exeter EX5 8MP,
              <br /> United Kingdom
            </span>
          </div>
        </div>
      </div>
      {/* section2 end */}
      <div className="flex section3 justify-center pt-10 pb-10">
        <img src={copyright} alt="mail" className="w-8 h-8 mr-2 " />
        <span className="text-sm mt-1 ">
          Copyright wannabee digital 2022. All Right Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
