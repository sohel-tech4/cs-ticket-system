
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


