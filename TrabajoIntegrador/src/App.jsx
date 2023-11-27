import { useState } from 'react'

import './App.css'
import { TaskList } from './components/TaskList'

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Lista de tareas</h1>
     <TaskList/>
    </>
  )
}

export default App
