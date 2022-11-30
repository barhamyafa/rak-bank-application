import React from 'react';

import SignInForm from '../components/forms/SignInForm';
import LeftSide from '../components/LeftSide';
import leftSideImage from '../assests/images/leftside-image.PNG';

function LoginPage() {
    return (
        <div className='w-full flex bg-neutralBg fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4'>
            <LeftSide className='flex-1 bg-full saturate-dark' style={{ backgroundImage: `url(${leftSideImage})` }} />
            <SignInForm className='flex-1 px-9' />
        </div>
    )
}

export default LoginPage;
