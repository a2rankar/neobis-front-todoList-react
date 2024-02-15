import React from 'react';

const Task = ({ task, completed, editing, newTaskValue, onToggleCompleted, onEdit, onSaveEdit, onRemove, onChange }) => {
  return (
    <li className={completed ? 'completed' : ''}>
      {editing ? (
        <input type="text" value={newTaskValue} onChange={onChange} />
      ) : (
        <span className="task-text">{task}</span>
      )}
      <div className="task-actions">
        {editing ? (
          <button className="save-button" onClick={onSaveEdit}>Save</button>
        ) : (
          <>
            <button className="edit-button" onClick={onEdit}>Edit</button>
            <button className="toggle-button" onClick={onToggleCompleted}>Toggle</button>
            <button className="remove-button" onClick={onRemove}>Remove</button>
          </>
        )}
      </div>
    </li>
  );
}

export default Task;
