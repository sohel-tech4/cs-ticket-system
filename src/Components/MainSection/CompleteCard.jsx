import React from "react";
import Banner from "../Banner/Banner";

const CompleteCard = ({ completeTicket}) => {
  return (
    <div className="my-5">
      <div className="shadow-lg text-center bg-[#E0E7FF] rounded-lg px-5 py-2 grid items-center ">
        <h1 className="text-xl font-semibold">{completeTicket.title}</h1>
      </div>
    </div>
  );
};

export default CompleteCard;
