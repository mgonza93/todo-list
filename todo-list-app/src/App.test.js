import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the App component correctly', () => {
    const { getByText } = render(<App />);

    const heading = getByText('Registro de Tareas');
    const createTaskForm = getByText('Agregar tarea');
    const taskList = getByText('Lista de tareas');

    expect(heading).toBeInTheDocument();
    expect(createTaskForm).toBeInTheDocument();
    expect(taskList).toBeInTheDocument();
  });
});
