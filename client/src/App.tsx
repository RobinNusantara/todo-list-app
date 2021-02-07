import React, {Fragment, Suspense} from 'react';
import Spinner from './components/tw-spinner';
const SignInPage = React.lazy(() => import('./pages/signin-page'));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<Spinner/>}>
        <SignInPage/>
      </Suspense>
    </Fragment>
  );
}

export default App;
