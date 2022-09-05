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

export type TasksAction = CreateTaskAction;