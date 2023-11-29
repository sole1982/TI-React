import React, { useEffect, useState } from 'react';
import TaskList from './TaskList';

export const TaskForm = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [formData, setFormData] = useState({ title: '', description: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);





  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
   
    e.preventDefault();
    if (editId !== null) {
      setTasks((prevTasks) => prevTasks.map((task) => task.id === editId ? { ...task, title: formData.title, description: formData.description } : task
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
   
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks((prevTasks) => prevTasks.map((task) => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    )
    );
  };

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setFormData({ title: taskToEdit.title, description: taskToEdit.description });
    setEditId(id);
  };

  return (

    
    <div className="container"      >
      <form className="input-group shadow p-3 rounded " onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="titulo"
          name="title"
          value={formData.title}
          onChange={handleChange} />
        <input
          className="form-control"
          type="text"
          placeholder="descripcion"
          name="description"
          value={formData.description}
          onChange={handleChange} />
        <button className="btn btn-info" type="submit">
          {editId !== null ? 'Editar tarea' : 'Agregar tarea'}
        </button>
      </form>

      <div className="shadow rounded p-3 mt-5 w-100">
        <div className="d-flex align-center justify-content-between list-group-item">
          <h5>Lista de tareas</h5>
        </div>
      
        <TaskList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDelete}
          onEdit={handleEdit} />
      </div>

    </div>
  );
};
