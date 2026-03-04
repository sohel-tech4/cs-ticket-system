import { Suspense, useState } from "react";
import Tickets from "./Tickets";
import ProgressCard from "./ProgressCard";
import CompleteCard from "./CompleteCard";
import { toast } from "react-toastify";
import Banner from "../Banner/Banner";

const TicketsPromise = fetch("../../../public/tickets.json").then((res) =>
  res.json(),
);
// .then(data => console.log(data))

const Mainsection = () => {
  const [inProgressTicket, setInProgressTicket] = useState([]);
  const [completeTicket, setCompleteTicket] = useState([]);

  const handleTicket = (Ticket) => {
    const exist = inProgressTicket.find(T => T.id === Ticket.id)
    if(!exist){
         const PreviosTicket = [...inProgressTicket, Ticket];
    setInProgressTicket(PreviosTicket);
    toast("Ticket Added in Task", {
      position: "top-center"
    })
    }
    else{
       toast("Already have this", {
      position: "top-center"
    })
    }
  };

  const handleComplete = (ProgressTicket) =>{
    const updatedProgress = inProgressTicket.filter(Ticket => Ticket.id !== ProgressTicket.id)
    setInProgressTicket(updatedProgress)
        const PreviosCompleteTikcket = [...completeTicket, ProgressTicket];
    setCompleteTicket(PreviosCompleteTikcket);
    toast("Wow Task Completed", {
      position: "top-center"
    })
  }

  return (
    <div className="container mx-auto mb-5">
      <Banner inProgressTicket={inProgressTicket.length} completeTicket={completeTicket.length}></Banner>
      <div className="md:flex gap-5">
      <div className="">
        <h1 className="text-2xl font-semibold">Customer Tickets</h1>
        <Suspense
          fallback={
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          }
        >
          <Tickets
            TicketsPromise={TicketsPromise}
            handleTicket={handleTicket}
          />
        </Suspense>
      </div>
      <div className="mt-5 p-3">
        <div className="mb-5">
          <h1 className="text-2xl mb-5 font-semibold">Task Status</h1>
          <div className="md:w-lg ">
            {inProgressTicket.length == 0 ? (
            <p className="text-lg">Select a ticket to add to Task Status</p>
          ) 
          :
          (
            inProgressTicket.map((ProgressTicket) => (
              <ProgressCard
                ProgressTicket={ProgressTicket} handleComplete={handleComplete}
                key={ProgressTicket.id}
              ></ProgressCard>
            ))
          )}
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl mb-5 font-semibold">Resolved Task</h1>
          <div className="md:w-lg">
            {completeTicket.length == 0 ? (
            <p className="text-lg">No resolved tasks yet.</p>
          ) 
          :
          (
            completeTicket.map((completeTicket) => (
              <CompleteCard 
                completeTicket={completeTicket}
                key={completeTicket.id}
                inProgressTicket={inProgressTicket}
              ></CompleteCard>
            ))
          )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Mainsection;
