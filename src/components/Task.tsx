import { Task as TaskType } from "./types";

const Task = (props: TaskProps) => {

  return (
    <div className="task">
      <div className="task-header">
        <div>{props.task.title}</div>
      </div>
      <hr />
      <div className="task-body">{props.task.description}</div>
    </div>
  );
};

type TaskProps = {
  task: TaskType
};

export default Task;