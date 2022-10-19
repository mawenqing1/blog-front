import React, { Fragment } from 'react';
import BlogRouter from '@/router';
import { useState } from 'react'
import './App.less';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <BlogRouter />
    </Fragment>
  )
}

export default App
