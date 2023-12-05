import './App.css';
import AddNewTasks from './components/AddNewTasks';
import Calandar from './components/Calandar';
import EditTodo from './components/EditTodo';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Projects from './components/Projects';
import Todos from './components/Todos';
import User from './components/User';

function App() {
  return (
    <div className='App'>
      <Sidebar>
        <User />
        <AddNewTasks />
        <Calandar />
        <Projects />
      </Sidebar>

      <Main>
        <Todos />
        <EditTodo />
      </Main>
    </div>
  );
}

export default App;
