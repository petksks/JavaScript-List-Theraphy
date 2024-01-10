import Header from './components/Header';
import './App.css';
import USP from './components/USP';
import TaskList from './components/TaskList';
// import Cocktail from './components/Cocktail';

function App() {
  return (
    <div className="App">
      <Header title="Therapy List"/>
      <USP />
      <TaskList />
      {/* <Cocktail /> */}
    </div>
  );
}

export default App;
