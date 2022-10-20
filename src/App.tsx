import React, { Fragment } from 'react';
import BlogRouter from '@/router';
import { useState } from 'react'
import './App.less';
import TopNav from "@/components/topNav";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <TopNav />
      <BlogRouter />
    </Fragment>
  )
}

export default App
