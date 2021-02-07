import React, {Fragment} from 'react';
import {Formik, Form} from 'formik';
import TextField from '../tw-text-field';
import {Primary as Button} from '../tw-button';

interface InitialValues {
  email: string;
  password: string;
}

const SignInForm: React.FC<{}> = () => {
  const initialValues: InitialValues = {email: '', password: ''};

  return (
    <Fragment>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}>{({handleChange}) => (
          <Form>
            <TextField handleChange={handleChange} className="my-3 w-full" type="email" label="Email" placeholder="Email Address"/>
            <TextField handleChange={handleChange} className="my-3 w-full" type="password" label="Password" placeholder="enter your password"/>
            <Button type="submit" className='px-4 py-3 w-full'>Sign In</Button>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default SignInForm;
