import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Suspense } from "react";
import Tickets from "./Tickets";

const TicketsPromise = fetch("../../../public/tickets.json")
.then(res => res.json())
// .then(data => console.log(data))


const Mainsection = () => {

  return (
    <div className="container mx-auto mb-5">
      <h1 className="text-2xl">Customer Tickets</h1>
        <Suspense fallback={<p>Country is loading...</p>}>
            <Tickets TicketsPromise={TicketsPromise} />
        </Suspense>
      
    </div>
  );
};

export default Mainsection;


{/* <div className="p-5 shadow-2xl rounded-lg">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">Login Issues - Can't Access Account</h1>
          <p className="bg-[#B9F8CF] py-2 px-3 rounded-xl font-bold"><span className="text-[#02A53B] "><FontAwesomeIcon  icon={faCircle} /></span> Open</p>
        </div>
        <p className="text-gray-500 text-lg">
          Customer is unable to log in to their account. They've tried resetting
          their password multiple times but still...
        </p>
        <div className="text-lg text-gray-500 font-semibold flex justify-between">
          <div className="flex gap-5">
            <p className="">#1001</p>
            <p className="text-red-500">HIGH PRIORITY</p>
          </div>
          <div className="flex gap-5">
            <p>John Smith</p>
            <p><FontAwesomeIcon icon={faCalendarDays} />1/17/2024</p>
          </div>
        </div>
      </div> */}
