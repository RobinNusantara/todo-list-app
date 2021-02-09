import React, {Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {authErrorSelector, authLoadingSelector} from '../../utils/auth.selectors';
import {signIn} from '../../actions/auth.action';
import {Formik, Form} from 'formik';
import TextField from '../tw-text-field';
import Alert from '../tw-alert';
import {Primary as Button} from '../tw-button';

export interface Values {
  email: string;
  password: string;
}

const SignInForm: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const isLoading: boolean = useSelector(authLoadingSelector);
  const error: string = useSelector(authErrorSelector);
  const initialValues: Values = {email: '', password: ''};

  return (
    <Fragment>
      {error && <Alert color="red">{error}</Alert>}
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
              className='py-3 w-full'>{isLoading ? 'Loading...' : 'Sign In'}</Button>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default SignInForm;
