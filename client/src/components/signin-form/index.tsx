import React, {Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AuthState} from '../../utils/auth.type';
import {signIn} from '../../actions/auth.action';
import {Formik, Form} from 'formik';
import TextField from '../tw-text-field';
import {Primary as Button} from '../tw-button';

export interface Values {
  email: string;
  password: string;
}

const SignInForm: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: AuthState) => state.isLoading);
  const initialValues: Values = {email: '', password: ''};

  return (
    <Fragment>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          dispatch(signIn(values));
        }}>{({handleChange}) => (
          <Form>
            <TextField
              type="email"
              label="Email"
              className="my-3 w-full"
              placeholder="Email Address"
              handleChange={handleChange}/>
            <TextField
              type="password"
              label="Password"
              className="my-3 w-full"
              placeholder="Password"
              handleChange={handleChange}/>
            <Button
              type="submit"
              disabled={isLoading}
              className='py-3 w-full'>Sign In</Button>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default SignInForm;
