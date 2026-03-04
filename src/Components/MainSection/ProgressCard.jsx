import React from 'react';

const ProgressCard = ({ProgressTicket, handleComplete}) => {

    return (
        <div className='shadow-lg text-center rounded-lg px-5 py-5 grid items-center '>
            <h1 className='text-2xl font-semibold mb-2'>{ProgressTicket.title}</h1>
            <button onClick={() => handleComplete(ProgressTicket)} className='btn text-xl bg-[#02A53B] px-5 py-2 rounded-lg text-center font-semibold'>Complete</button>
        </div>
    );
};

export default ProgressCard;