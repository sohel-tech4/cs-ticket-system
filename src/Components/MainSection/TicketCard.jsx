import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const TicketCard = ({ Ticket, handleTicket }) => {
  const { createdAt, customer, description, id, priority, status, title } =
    Ticket;

  return (
    <button onClick={() => handleTicket(Ticket)}>
      <div className="p-5 shadow-lg rounded-lg">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">{title}</h1>
          <p
            className={`${status == "Open" ? "bg-[#B9F8CF]" : "bg-[#F8F3B9]"} py-2 px-3 rounded-xl font-bold`}
          >
            <span
              className={`${status == "Open" ? "text-[#02A53B]" : "text-[#FEBB0C]"}`}
            >
              <FontAwesomeIcon icon={faCircle} />
            </span>{" "}
            {status}
          </p>
        </div>
        <p className="text-gray-500 text-left text-lg">{description}</p>
        <div className="text-lg text-gray-500 font-semibold flex justify-between">
          <div className="md:flex gap-5">
            <p className="text-left">#{id}</p>
            <p
              className={`uppercase ${priority == "High" ? "text-red-500" : priority == "Medium" ? "text-[#FEBB0C]" : priority == "Low" ? "text-green-500" : ""} `}
            >
              {priority} PRIORITY
            </p>
          </div>
          <div className="md:flex gap-5">
            <p>{customer}</p>
            <p>
              <FontAwesomeIcon icon={faCalendarDays} />
              {createdAt}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default TicketCard;
