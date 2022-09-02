import Task from './Task';
import { Task as TaskType } from './types';

const TaskList = (props: TaskListProps) => {
  return (
    <div className="task-list">
      <div className="task-list-title">
        <strong>{props.status}</strong>
      </div>
      {props.tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

type TaskListProps = {
  status: TaskType['status'];
  tasks: TaskType[]
}

export default TaskList;