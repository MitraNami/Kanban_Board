import React from 'react';
import { Task as TaskType, EditTaskData } from "./types";
import { TASK_STATUSES } from './Taskspage';

const Task = (props: TaskProps) => {

  const handleStatusChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    props.onStatusChange({id: props.task.id, status: evt.target.value});
  };

  return (
    <div className="task">
      <div className="task-header">
        <div>{props.task.title}</div>
        <select value={props.task.status} onChange={handleStatusChange}>
          {
            TASK_STATUSES.map(status => 
            <option 
              key={status}
              value={status}
            >
              {status}
            </option>
            )
          }
        </select>
      </div>
      <hr />
      <div className="task-body">{props.task.description}</div>
    </div>
  );
};

type TaskProps = {
  task: TaskType;
  onStatusChange: (updatedData: EditTaskData) => void;
};

export default Task;