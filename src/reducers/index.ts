import { Task, TaskStatuses, TasksState, TasksAction } from "../components/types";
import { uniqueId, CREATE_TASK_TYPE, EDIT_TASK } from "../actions";

const mockTasks: Task[] = [
  {
    id: uniqueId(),
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: TaskStatuses.IN_PROGRESS,
  },
  {
    id: uniqueId(),
    title: 'Peace on Earth',
    description: 'No big deal.',
    status: TaskStatuses.IN_PROGRESS,
  },
];

const defaulState : TasksState = { tasks: mockTasks};


export default function tasks(state = defaulState, action: any) {
  if (action.type === CREATE_TASK_TYPE) {
    return {...state, tasks: [action.payload, ...state.tasks]};
  } else if (action.type === EDIT_TASK) {
    const updatedTasks = state.tasks.map(task => {
      if (task.id === action.payload.id) {
        return {...task, ...action.payload};
      }
      return task;
    });
    return {...state, tasks: updatedTasks};
  }
  return state;
}