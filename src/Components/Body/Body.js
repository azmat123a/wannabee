import React from "react";
import bgImg from "./../../Assets/body_bg.png";
import teamWrok from "./../../Assets/teamwork.png";
import "./body.css";
const Body = () => {
  return (
    <div
      className="flex bg-fit body flex-col"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex">
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col pl-24 text-left">
            <h1 className="ml-20 mb-4">Ready for a change?</h1>
            <p className="text-left ml-20">
              Wannabee is an ever-growing hive, and we are always looking for
              brilliant people to join our team. We want to hear from you if you
              have a strong passion for digital marketing and want to join a
              thriving team of professionals.
            </p>
          </div>
          <div className="flex flex-col pl-24 text-left mt-4">
            <h1 className="ml-20 mb-4">Wannabee perks</h1>
            <ul className="list-disc ml-24">
              <li>Market competitive salary</li>
              <li>Balanced work life</li>
              <li>Employee training program</li>
              <li>Paid time offs</li>
              <li>Healthy work environment</li>
              <li>Completely remote</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <img src={teamWrok} alt="images" className="flex" />
        </div>
      </div>

      <div className="flex justify-center mt-24">
        <div className="flex announcement mt-24">
          Currently no jobs available{" "}
        </div>
      </div>
    </div>
  );
};

export default Body;
