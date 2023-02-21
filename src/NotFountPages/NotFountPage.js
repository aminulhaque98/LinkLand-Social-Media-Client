import React from 'react';
import { Link } from 'react-router-dom';

const NotFountPage = () => {
    return (
        <div className='mx-96 my-52 text-xl'>
            <img className='w-96 h-96' src='https://i.ibb.co/LxLNq6g/images-1-removebg-preview.png' alt='' />

            <h1>This Route is not found: Please search anything else.</h1>
            <Link className='text-red-400' to='/'>Back To home page</Link>
        </div>
    );
};

export default NotFountPage;