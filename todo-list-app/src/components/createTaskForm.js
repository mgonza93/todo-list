import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTask } from '../actionCreators/actions';
import '../css/style.css';

const CreateTaskForm = ({ createTask }) => {
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setTaskName(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === '') {
      setError('El nombre de la tarea es obligatorio');
      return;
    }
    const newTask = {
      id: Date.now(),
      name: taskName
    };
    createTask(newTask);
    setTaskName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de la tarea"
          value={taskName}
          onChange={handleChange}
        />
        <button className='create' type="submit">Agregar tarea</button>

      </form>
      {error && <div className="error">{error}</div>}
    </div>

  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (task) => dispatch(createTask(task))
  };
};

export default connect(null, mapDispatchToProps)(CreateTaskForm);
