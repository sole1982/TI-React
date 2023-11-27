import { useState } from "react"
import { TaskItems } from "./TaskItems"
import { TaskForm } from "./TaskForm"
export const TaskList = () => {
  
    const AddTask = ()=>{
        setTareas([...tareas, {nombre:"laura", realizada: true}])
     }
    
    
    
    let List = [
          {nombre: "sole", realizada: true },
          {nombre: "brune", realizada: false},
                ]

    const [tareas, setTareas] = useState(List)
     
   const onAddTask = (nuevaTarea, verificada)=>{
         if (nuevaTarea < 1) return
      
         const envio = {
            id: tareas.length + 1,
         nombre: nuevaTarea,
         realizada: verificada, }
      setTareas([...tareas, envio])
      
   }

    
    return (
    <>
       <ul>
          
        {tareas.map((items) => <TaskItems key={items.id} nombre={items.nombre} realizada={items.realizada}></TaskItems>)}

       </ul>

       <TaskForm agregarTarea={onAddTask}/>

    </>
  )
}
