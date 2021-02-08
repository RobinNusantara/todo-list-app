import React, {Fragment} from 'react';
import {Formik, Form} from 'formik';
import TextField from '../tw-text-field';
import {Primary as Button} from '../tw-button';

interface Values {
  email: string;
  password: string;
}

const SignInForm: React.FC<{}> = () => {
  const initialValues: Values = {email: '', password: ''};

  return (
    <Fragment>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
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
            <Button type="submit" className='py-3 w-full'>Sign In</Button>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default SignInForm;