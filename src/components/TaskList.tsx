import Task from './Task';
import { Task as TaskType, EditTaskData } from './types';

const TaskList = (props: TaskListProps) => {
  return (
    <div className="task-list">
      <div className="task-list-title">
        <strong>{props.status}</strong>
      </div>
      {props.tasks.map(task => (
        <Task key={task.id} task={task} onStatusChange={props.onStatusChange} />
      ))}
    </div>
  );
}

type TaskListProps = {
  status: TaskType['status'];
  tasks: TaskType[];
  onStatusChange: (updatedData: EditTaskData) => void;
}

export default TaskList;