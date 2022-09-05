import { NewTaskData, Task, TaskStatuses } from "../components/types";

export const CREATE_TASK_TYPE = 'CREATE_TASK';

let _id = 1;
export const uniqueId = () => _id++;

export const createTask = (newTask: NewTaskData): {type: string; payload: Task} => 
  ({
    type: CREATE_TASK_TYPE,
    payload: {
      id: uniqueId(),
      title: newTask.title,
      description: newTask.description,
      status: TaskStatuses.UNSTARTED,
    }
  });
