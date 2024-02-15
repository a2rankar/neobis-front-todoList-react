import React from 'react';
import Task from './Task';

const TodoList = ({ tasks, completedTasks, editingIndex, newTaskValue, onToggleCompleted, onEdit, onSaveEdit, onRemove, onChange }) => {
  return (
    <ul id="taskList">
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          completed={completedTasks.includes(task)}
          editing={editingIndex === index}
          newTaskValue={newTaskValue}
          onToggleCompleted={() => onToggleCompleted(index)}
          onEdit={() => onEdit(index)}
          onSaveEdit={onSaveEdit}
          onRemove={() => onRemove(index)}
          onChange={onChange}
        />
      ))}
    </ul>
  );
}

export default TodoList;
