import { useState } from 'react'

import './App.css'
import TaskForm  from './components/TaskForm'



function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Lista de tareas</h1>
     <TaskForm></TaskForm>
    </>
  )
}

export default App
