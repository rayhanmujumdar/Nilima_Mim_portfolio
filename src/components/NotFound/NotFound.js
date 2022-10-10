import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../utils/Title';

const NotFound = () => {
    return (
        <div className='h-[93vh] flex flex-col justify-center items-center text-center gap-y-5'>
            <Title title="404"></Title>
            <h1 className='text-9xl'>Oops!</h1>
            <div className='w-96'>
                <p className='text-2xl font-bold'>404 - Page Not Found</p>
                <p className='py-3 font-semibold'>The page your are looking for might have been removed had its name changed or is temporarily unavailable</p>
                <Link to='/' className='btn btn-secondary rounded-full'>Go to homepage</Link>
            </div>
        </div>
    );
};

export default NotFound;