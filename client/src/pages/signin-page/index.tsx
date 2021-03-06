import React, {Fragment} from 'react';
import LayoutFactory from '../../layout/signin-signup-layout';
import SignInForm from '../../components/signin-form';

function SignInPage() {
  return (
    <Fragment>
      <LayoutFactory>
        <SignInForm/>
      </LayoutFactory>
    </Fragment>
  );
}

export default SignInPage;
