import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className=''>
            <h3>
                Welcome To Home Page if you want To go back to login page please enter on the below Link
            </h3>
            <Link className='text-orange' to='/login'>
                Log in
            </Link>


        </div>
    )
}

export default HomePage;
