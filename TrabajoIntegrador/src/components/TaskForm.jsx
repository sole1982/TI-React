import React, { useEffect, useState } from 'react';
import TaskList from './TaskList';


const TaskForm = () => {
  const [tasks, setTasks] = useState(() => {
    // Intentar obtener las tareas desde localStorage, si no hay, retorna un array vacío.
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [formData, setFormData] = useState({ title: '', description: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    // Al actualizar las tareas, guardarlas en localStorage.
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  

  

  const handleChange = (e) => {
    // actualiza los cambios en los campos de entrada del formulario
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    //maneja  la edición de tareas existentes como la suma de nuevas tareas al estado de tasks en función de las acciones del usuario en el formulario.
    e.preventDefault();
    if (editId !== null) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editId ? { ...task, title: formData.title, description: formData.description } : task
        )
      );
      setEditId(null);
    } else {
      if (formData.title.trim() !== '' && formData.description.trim() !== '') {
        const newTask = {
          id: Date.now(),
          title: formData.title,
          description: formData.description,
          isCompleted: false,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
      }
    }
    setFormData({ title: '', description: '' });
  };

  const handleDelete = (id) => {
    //Borra las tareas
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    //cambia el estado de completado de una tarea con cada clic en la casilla de verificación asociada a esa tarea.
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleEdit = (id) => {
    //permite que el formulario muestre los datos actuales de la tarea y cambie a modo de edición.
    const taskToEdit = tasks.find((task) => task.id === id);
    setFormData({ title: taskToEdit.title, description: taskToEdit.description });
    setEditId(id);
  };

  return (
    <div className="container w-75">
      <form className="input-group shadow p-3 rounded" onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="titulo"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          className="form-control"
          type="text"
          placeholder="descripcion"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <button className="btn btn-primary" type="submit">
          {editId !== null ? 'Editar tarea' : 'Agregar tarea'}
        </button>
      </form>

      <div className="shadow rounded p-3 mt-5 w-100">
        <div className="d-flex align-center justify-content-between list-group-item">
          <h5>Lista de tareas</h5>
        </div>
     {/*Aca se importa Tasklist (un mapeo de las tareas) Pasa las propiedades task(que toma la tarea) 
         y onEdit(que devuelve la funcion handleEdit*/}
        <TaskList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
       
    </div>
  );
};

export default TaskForm;
