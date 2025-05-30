import { useState } from 'react';
import { FaEdit, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

function TaskItem({ task, onUpdateTask, onDeleteTask, onToggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdateTask(editedTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTask({ ...task });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
            className="edit-input"
          />
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleChange}
            className="edit-textarea"
          />
          <input
            type="date"
            name="dueDate"
            value={editedTask.dueDate}
            onChange={handleChange}
            className="edit-input"
          />
          <select
            name="priority"
            value={editedTask.priority}
            onChange={handleChange}
            className="edit-select"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <div className="edit-buttons">
            <button onClick={handleSave} className="save-button">
              <FaCheck /> Save
            </button>
            <button onClick={handleCancel} className="cancel-button">
              <FaTimes /> Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="task-content">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
              className="task-checkbox"
            />
            <div className="task-details">
              <h3 className={task.completed ? 'completed' : ''}>{task.title}</h3>
              {task.description && <p>{task.description}</p>}
              <div className="task-meta">
                {task.dueDate && (
                  <span className="due-date">
                    Due: {new Date(task.dueDate).toLocaleDateString()}
                  </span>
                )}
                <span className={`priority ${task.priority.toLowerCase()}`}>
                  {task.priority}
                </span>
              </div>
            </div>
          </div>
          <div className="task-actions">
            <button onClick={handleEdit} className="edit-button">
              <FaEdit />
            </button>
            <button onClick={() => onDeleteTask(task.id)} className="delete-button">
              <FaTrash />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem; 