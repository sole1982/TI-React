import { useState } from 'react'

import './App.css'
import TaskForm  from './components/TaskForm'
import Example from './components/Backdrop'



function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Lista de tareas</h1>
     <TaskForm></TaskForm>
     <br></br>
     <Example></Example>
    </>
  )
}

export default App
