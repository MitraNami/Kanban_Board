import TasksPage from "./components/Taskspage";
import { Task, TaskStatuses } from './components/types';

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

function App() {
  return (
    <div className="main-content">
      <TasksPage tasks={mockTasks} />
    </div>
  );
}

export default App;
