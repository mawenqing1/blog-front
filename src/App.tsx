import React, { Fragment, Suspense } from 'react';
import BlogRouter from '@/router';
import { useState } from 'react';
import LoadingPage from './components/Loading';
import './App.less';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
        <Suspense fallback={<LoadingPage />}>
          <BlogRouter />
        </Suspense>
    </Fragment>
  )
}

export default App
