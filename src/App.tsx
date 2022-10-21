import React, { Fragment, Suspense } from 'react';
import BlogRouter from '@/router';
import { useState } from 'react'
import './App.less';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
        <Suspense fallback={<div>loading</div>}>
          <BlogRouter />
        </Suspense>
    </Fragment>
  )
}

export default App
