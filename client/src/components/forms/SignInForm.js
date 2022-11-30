import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signIn } from '../../actions';
import SignForm from './SignForm';
import ThemeSwitcher from '../ThemeSwitcher';

function SignInForm(props) {

    const onSubmit = formValues => {
        /*
            When User click on Continue will send request to store the data
            in the database but Login Progress will be process different , is just example to handle
            Sending Request
        */
        props.signIn(formValues);
    };

    return (
        <div className={`signin-wrapper ${props.className}`}>
            <div className='flex justify-between border-b-2 border-b-gray-200 py-7'>
                <span className='text-orange'>travelguru</span>
                <ThemeSwitcher />
            </div>
            <div className='border-b-2 border-b-gray-200 py-7'>
                <h3 className=' text-5xl text-neutralText font-bold'>Sign in to Travelguru</h3>
                <div className='flex mt-4'>
                    <p className='text-neutral-300 pr-2'>Don't have an account?</p>
                    <Link to="/sign-up" className='text-orange'>Sign up</Link>
                </div>
            </div>
            <div className='border-b-2 border-b-gray-200 py-7'>
                <SignForm onSubmit={onSubmit} />
            </div>
        </div>
    );
}

export default connect(
    null,
    { signIn }
)(SignInForm);
