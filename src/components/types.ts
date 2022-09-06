export interface Task {
  id: number;
  status: TaskStatus;
  title: string;
  description: string;
}

export type NewTaskData = Pick<Task, 'title' | 'description'>;

export enum TaskStatuses {
  UNSTARTED = 'Unstarted',
  COMPLETED = 'Completed',
  IN_PROGRESS = 'In Progress',
}

type TaskStatus = TaskStatuses.UNSTARTED | TaskStatuses.COMPLETED | TaskStatuses.IN_PROGRESS;

export interface TasksState {
  tasks: Task[];
}

interface CreateTaskAction {
  type: string;
  payload: Task;
}

// it' really Task type, and one of the optionals needs to be required!!!
export type EditTaskData = {
  id: number;
  status?: string;
  title?: string;
  description?: string;
}
interface EditTaskAction {
  type: string;
  payload: EditTaskData;
}

export type TasksAction = CreateTaskAction | EditTaskAction;
