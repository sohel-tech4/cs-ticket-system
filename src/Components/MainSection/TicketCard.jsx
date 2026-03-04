import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCalendarDays } from "@fortawesome/free-solid-svg-icons";



const TicketCard = ({ Ticket }) => {

    const {createdAt, customer, description, id, priority, status, title} = Ticket
  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">
            {title}
          </h1>
          <p className="bg-[#B9F8CF] py-2 px-3 rounded-xl font-bold">
            <span className="text-[#02A53B] ">
              <FontAwesomeIcon icon={faCircle} />
            </span>{" "}
            {status}
          </p>
        </div>
        <p className="text-gray-500 text-lg">
          {description}
        </p>
        <div className="text-lg text-gray-500 font-semibold flex justify-between">
          <div className="flex gap-5">
            <p className="">#100{id}</p>
            <p className="text-red-500 uppercase">{priority} PRIORITY</p>
          </div>
          <div className="flex gap-5">
            <p>{customer}</p>
            <p>
              <FontAwesomeIcon icon={faCalendarDays} />
              {createdAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
