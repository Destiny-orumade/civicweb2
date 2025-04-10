import React from "react";
import images from "../assets/dashboard";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <>
      {" Heading"}
      <div className="flex items-center justify-between px-5 my-24">
        <div>
          <h1 className="text-[#484848] font-bold text-3xl">Dashboard</h1>
        </div>
        <div className="flex items-center justify-evenly gap-2">
          <Link to="">
            <img src={images.notification} className="w-9" alt="notification" />
          </Link>
          <Link to="">
            {" "}
            <img src={images.message} className="w-9" alt="message" />
          </Link>
          <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
            <img
              src={images.avatar}
              className="w-8 h-8 rounded-full"
              alt="avatar"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="open-sans text-3xl text-[#484848] font-bold">
          No New Inbox
        </p>
        <button className="bg-[#D9D9D980] text-[#000000] p-2 rounded border-2 border-[#0000001A] mt-6">
          View details
        </button>
      </div>
    </>
  );
};

export default Dashboard;
