import TasksPage from "./components/Taskspage";
import { Task, TasksState } from './components/types';
import { connect } from 'react-redux';


function App(props: { tasks: Task[] }) {
  return (
    <div className="main-content">
      <TasksPage tasks={props.tasks} />
    </div>
  );
}

const mapStateToProps = (state: TasksState) => ({ tasks: state.tasks });

export default connect(mapStateToProps) (App);