import TaskItem from './TaskItem';

function TaskList({ tasks, onUpdateTask, onDeleteTask, onToggleComplete }) {
  if (tasks.length === 0) {
    return <p className="no-tasks">No tasks found. Add a new task to get started!</p>;
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdateTask={onUpdateTask}
          onDeleteTask={onDeleteTask}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}

export default TaskList; 