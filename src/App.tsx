import TasksPage from "./components/Taskspage";
import { EditTaskData, NewTaskData, Task, TasksState } from './components/types';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { createTask, editTask } from './actions';


function App(props: { tasks: Task[], dispatch: Dispatch}) {
  
  const onCreateTask = (taskData: NewTaskData) => {
    props.dispatch(createTask(taskData));
  };

  const onStatusChange = (editTaskData: EditTaskData) => {
    props.dispatch(editTask(editTaskData)); 
  };

  return (
    <div className="main-content">
      <TasksPage 
        tasks={props.tasks} 
        onCreateTask={onCreateTask} 
        onStatusChange={onStatusChange} 
      />
    </div>
  );
}

const mapStateToProps = (state: TasksState ) => ({ tasks: state.tasks });

export default connect(mapStateToProps) (App);