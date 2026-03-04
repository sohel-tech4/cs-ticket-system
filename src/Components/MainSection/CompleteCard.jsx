import React from "react";

const CompleteCard = ({ completeTicket }) => {
  return (
    <div className="shadow-lg text-center rounded-lg px-5 py-5 grid items-center ">
      <h1 className="text-2xl font-semibold mb-2">{completeTicket.title}</h1>
    </div>
  );
};

export default CompleteCard;
