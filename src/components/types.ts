export interface Task {
  id: number;
  status: TaskStatus;
  title: string;
  description: string;
}

export enum TaskStatuses {
  UNSTARTED = 'Unstarted',
  COMPLETED = 'Completed',
  IN_PROGRESS = 'In Progress',
}

type TaskStatus = TaskStatuses.UNSTARTED | TaskStatuses.COMPLETED | TaskStatuses.IN_PROGRESS;
