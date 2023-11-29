import React from 'react';
import TaskItem from './TaskItems';

const TaskList = ({ tasks, onToggleComplete, onDelete, onEdit }) => {
  
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={() => onToggleComplete(task.id)}
          onDelete={() => onDelete(task.id)}
          onEdit={() => onEdit(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
