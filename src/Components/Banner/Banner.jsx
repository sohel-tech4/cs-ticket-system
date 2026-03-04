import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto md:flex gap-5 justify-center my-10'> 
        <div className="text-white rounded-lg md:w-1/2 m-2 font-bold py-16 text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">                
                <h1 className='text-2xl mb-5'>In-Progress</h1>
                <h1 className='text-6xl'>0</h1>
        </div>
        <div className='text-white rounded-lg md:w-1/2 m-2 font-bold py-16 text-center bg-gradient-to-r from-[#54CF68] to-[#00827A]'>
                <h1 className='text-2xl mb-5'>Resolved</h1>
                <h1 className='text-6xl'>0</h1>
        </div>
        </div>
    );
};

export default Banner;