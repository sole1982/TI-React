import React from 'react';
import Modal from './Modal';
import { useState } from 'react';

const TaskItem = ({ task, onToggleComplete, onDelete, onEdit }) => {
  
  const [modalEliminar, setModalEliminar] = useState({isOpen: false, task: {}})
  //devuelve el formulario para la entrada de datos del usuario y las acciones que puede realizar ( eliminar, editar, marcar como completada)
  return (
    <div className="d-flex align-items-center list-group-item">
      <input
        type="checkbox"
        className="form-check-input mx-2"
        checked={task.isCompleted}
        onChange={onToggleComplete}
      />
      <p className={`p-0 m-0 flex-grow-1 ${task.isCompleted ? 'text-decoration-line-through' : ''}`}>
        {task.title} <br />
        <span className="text-muted">{task.description}</span>
      </p>
      {task.isCompleted && <span className="badge bg-success">Completada</span>}
      <button className="btn btn-warning mx-1" onClick={onEdit}>
        ✏️
      </button>
      <button className="btn btn-danger mx-1" onClick={()=> setModalEliminar({isOpen:true, task: task})}>
        🗑️
      </button>
      {/*Aca importa el modal que pregunta al usuario si esta seguro de realizar las acciones de borrar la tarea*/}
      <Modal isOpen={modalEliminar.isOpen} isClose={()=>setModalEliminar({isOpen: false, task:{}})}>
      <div className='container text-center p-5'>
        <h1>prueba "{modalEliminar.task.titulo}" ?</h1>
        <div className='w-100 d-flex justify-content-center mt-3'>
          <button className='btn btn-danger mx-1' onClick={onDelete}>si, borrar tarea</button>
          <button className='btn btn-sucess mx-1' onClick={()=>setModalEliminar({isOpen: false, task:{}})}>no, no borrar tarea</button>
        </div>
      </div>


       </Modal>



    </div>
  );
};

export default TaskItem;
