import React, { use } from 'react';

const Tickets = ({TicketsPromise}) => {
    const AllTickets = use(TicketsPromise)

console.log(AllTickets);
    return (
        <div>
            
        </div>
    );
};

export default Tickets;