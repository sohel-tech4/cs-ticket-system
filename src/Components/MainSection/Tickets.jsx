import React, { use } from 'react';
import TicketCard from './TicketCard';

const Tickets = ({TicketsPromise}) => {
    const AllTickets = use(TicketsPromise)
    return (
        <div className='grid grid-cols-2 gap-5'>
            {
                AllTickets.map(Ticket => <TicketCard key={Ticket.id} Ticket={Ticket}></TicketCard>)
            }
            
        </div>
    );
};

export default Tickets;