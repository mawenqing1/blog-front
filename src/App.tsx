import React, { Fragment, Suspense } from 'react'
import BlogRouter from '@/router'
import LoadingPage from './components/Loading'
import './App.less'

function App () {

  return (
    <Fragment>
        <Suspense fallback={<LoadingPage />}>
          <BlogRouter />
        </Suspense>
    </Fragment>
  )
}

export default App
