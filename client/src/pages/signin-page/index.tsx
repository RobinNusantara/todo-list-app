import React from 'react';
import SignInForm from '../../components/signin-form';

function SignInPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="bg-white lg:w-4/12 md:w-6/12 w-10/12 m-auto my-10 shadow-md">
        <div className="py-8 px-8 rounded-xl">
          <SignInForm/>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
