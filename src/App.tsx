import TasksPage from "./components/Taskspage";
import { NewTaskData, Task, TasksState } from './components/types';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { createTask } from './actions';


function App(props: { tasks: Task[], dispatch: Dispatch}) {
  
  const onCreateTask = (taskData: NewTaskData) => {
    props.dispatch(createTask(taskData));
  };

  return (
    <div className="main-content">
      <TasksPage tasks={props.tasks} onCreateTask={onCreateTask} />
    </div>
  );
}

const mapStateToProps = (state: TasksState ) => ({ tasks: state.tasks });

export default connect(mapStateToProps) (App);