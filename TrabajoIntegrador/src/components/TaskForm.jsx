import { useState } from "react"


export const TaskForm = ({agregarTarea}) => {
  
  const[nuevaTarea, setNuevaTarea] = useState("")
  const [verificada, setVerificada] = useState("")
  
  const onInputChange = (event)=>{
    setNuevaTarea(event.target.value)
    console.log(nuevaTarea)}
 
  
const handleChange = (event)=>{
   setVerificada(event.target.value)
   console.log(verificada)
 }
 const onSubmit = (event) =>{
        event.preventDefault()
        agregarTarea(nuevaTarea)
 }
    return (
    <>
        <form onSubmit={onSubmit}>
           <input type="text"
                  value={nuevaTarea}
             onChange={onInputChange}></input>


<select value={verificada} onChange={handleChange}>
        
        <option value={false}>no</option>
        <option value={true}>si</option>
      </select>
<button onSubmit={onSubmit}>click</button>

</form>
    </>
    
  )
}
