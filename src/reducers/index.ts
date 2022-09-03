import { Task, TaskStatuses, TasksState } from "../components/types";

const mockTasks: Task[] = [
  {
    id: 1,
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: TaskStatuses.IN_PROGRESS,
  },
  {
    id: 2,
    title: 'Peace on Earth',
    description: 'No big deal.',
    status: TaskStatuses.IN_PROGRESS,
  },
];

const defaulState : TasksState = { tasks: mockTasks};


export default function tasks(state = defaulState, action: {type: string; payload?: any}) {
  return state;
}