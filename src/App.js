import { useEffect ,useState} from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button,Icon} from 'semantic-ui-react'
import './App.css';
import Container from './components/Contaienr'
import Header from './components/Header';
import InputTask from './components/InputTask'
import TaskContent from './components/TaskContent'


function App() {
  let initialTasks = JSON.parse(localStorage.getItem('tasks'))
  if(!initialTasks){
    initialTasks = []
  }
  const [tasks,setTasks] = useState (initialTasks)
  useEffect(() => {
    if(initialTasks){
      localStorage.setItem('tasks',JSON.stringify(tasks))
    }else{
      localStorage.setItem('tasks',JSON.stringify([]))
    }
  }, [initialTasks,tasks])
  
  const createTask=(task) =>{
    setTasks([...tasks,task])
  }
  const deleteTask = (id) =>{
    const currentTask = tasks.filter((task) => task.idTask !==id)
    setTasks(currentTask)
  }
  return (
    <Container>
      <Header/>
      <InputTask createTask={createTask}/>
      <TaskContent tasks={tasks} deleteTask ={deleteTask}/>
    </Container>

  );
}

export default App;
