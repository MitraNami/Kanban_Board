import TaskList from "./TaskList";
import { Task, TaskStatuses } from "./types";

const TASK_STATUSES = [TaskStatuses.UNSTARTED, TaskStatuses.IN_PROGRESS, TaskStatuses.COMPLETED];

const TasksPage = (props: TasksPageProps) => {
  const { tasks } = props;

  const renderTaskLists = () => {
    return TASK_STATUSES.map(status => { 
      const tasksWithGivenStatus = tasks.filter(task => task.status === status);
      return <TaskList key={status} status={status} tasks={tasksWithGivenStatus} />
    });
  };

  return (
    <div className="tasks">
      <div className="task-lists">
        {renderTaskLists()}
      </div>
    </div>
  );
};

type TasksPageProps = {
  tasks: Task[];
};

export default TasksPage;