import React, { Fragment } from 'react';
import BlogRouter from '@/router';
import { useState } from 'react'
import './App.less';
import BgA from './components/BgAnimatiion';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <BlogRouter />
      <BgA />
    </Fragment>
  )
}

export default App
