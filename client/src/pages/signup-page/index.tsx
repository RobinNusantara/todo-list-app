import React, {Fragment} from 'react';
import LayoutFactory from '../../layout/signin-signup-layout';
import SignUpForm from '../../components/signup-form';

function SignUpPage() {
  return (
    <Fragment>
      <LayoutFactory>
        <SignUpForm/>
      </LayoutFactory>
    </Fragment>
  );
}

export default SignUpPage;
