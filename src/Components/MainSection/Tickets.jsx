import React, { use } from 'react';
import TicketCard from './TicketCard';

const Tickets = ({TicketsPromise, handleTicket}) => {
    const AllTickets = use(TicketsPromise)
    return (
        <div className='grid md:grid-cols-2 gap-5'>
            {
                AllTickets.map(Ticket => <TicketCard key={Ticket.id} Ticket={Ticket} handleTicket={handleTicket}></TicketCard>)
            }
            
        </div>
    );
};

export default Tickets;