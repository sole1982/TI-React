import React from 'react';
import Modals from './Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


const TaskItem = ({ task, onToggleComplete, onDelete, onEdit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [show, setShow] = useState(false);

  
  const handleToggleModal = () => {
    setTaskToDelete(task);
    
    setIsModalOpen(!isModalOpen);
  };

  const handleDeleteTask = () => {
    onDelete(taskToDelete.id);
    setIsModalOpen(false); 
  };

  
  return (
    <>
    <div className="d-flex align-items-center list-group-item bg-info-subtle">
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
      {task.isCompleted && <span className="badge bg-info">Completada</span>}
      <Button variant="outline-info" className=" mx-1" onClick={onEdit}>
        ✏️
      </Button>
      <Button variant="outline-info" className="mx-1" onClick={handleToggleModal}>
          🗑️
        </Button>
   
     </div>

     <div>

 <Modals isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDelete={handleDeleteTask}
        task={taskToDelete} />

     </div>
    </>
  );
};

export default TaskItem;
