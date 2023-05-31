import React from 'react';
import CreateTaskForm from './components/createTaskForm';
import TaskList from './components/taskList';
import './css/style.css'

const App = () => {
  return (
    <div className='container'>
      <h1>Registro de Tareas</h1>
      <CreateTaskForm />
      <TaskList />
    </div>
  );
};

export default App;

