import React, {Fragment, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import Spinner from './components/tw-spinner';
const SignInPage = React.lazy(() => import('./pages/signin-page'));
const SignUpPage = React.lazy(() => import('./pages/signup-page'));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route path="/" element={<SignInPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
