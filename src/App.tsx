import { ChangeEvent, useState } from 'react';
import { Header } from './components/Header';
import { InputText } from './components/InputText';
import { TaskList } from './components/TaskList';

import './styles/global.css'

export interface Task{
  content: string;
  status: boolean;
}

export function App() {
  const [newTask, setNewTask] = useState('');

  const [tasks, setTasks] = useState<Task[]>([]);

  function handleNewTask(value: string){
      setNewTask(value)
  }

  function handleAddNewTaskTheList(){
    setTasks([ ...tasks, {
      content: newTask,
      status: false
    }])
    setNewTask('')
 }

  function deleteTask(taskToDelete: string) {
    const taskWithoutDeletedOne = tasks.filter(task => {
      return task.content !== taskToDelete;
    })

    setTasks(taskWithoutDeletedOne);
  }
  
  function changeStatus(content: string){
    const updateTasks = tasks.map(task => task.content === content 
      ? {...task, status: !task.status} 
      : task)  
  
    setTasks(updateTasks)
  }

  return (
    <>
      <Header />
        <div className="w-11/12 mx-auto md:w-3/5 lg:w-2/4 2xl:w-1/3">
          <InputText 
            handleAddNewTaskTheList={handleAddNewTaskTheList}  
            handleNewTask={handleNewTask}
            valueNewTask={newTask}
          />
          <TaskList changeStatus={changeStatus} onDeleteTask={deleteTask} list={tasks}/>
        </div>
    </>
  );
}