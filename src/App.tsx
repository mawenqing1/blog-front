import BlogRouter from '@/router';
import { useState } from 'react'
import './App.less'

function App() {
  const [count, setCount] = useState(0)

  return (
      <BlogRouter />
  )
}

export default App
