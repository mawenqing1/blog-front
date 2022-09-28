import BlogRouter from '@/router';
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BlogRouter />
  )
}

export default App
