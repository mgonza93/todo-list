import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTask, updateTask} from '../actionCreators/actions';
import '../css/style.css'

const TaskList = ({ tasks, deleteTask, updateTask }) => {
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editedTaskName, setEditedTaskName] = useState('');

    const handleEdit = (taskId) => {
        const taskToEdit = tasks.find((task) => task.id === taskId);
        setEditingTaskId(taskId);
        setEditedTaskName(taskToEdit.name);
    };

    const handleSave = (taskId) => {
        const updateTask = {
            id: taskId,
            name: editedTaskName
        };
        updateTask(taskId, updateTask);
        setEditingTaskId(null);
        setEditedTaskName('');
    };

    const handleCancel = () => {
        setEditingTaskId(null);
        setEditedTaskName('');
    };

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {editingTaskId === task.id ? (
                        <>
                            <input
                                type="text"
                                value={editedTaskName}
                                onChange={(e) => setEditedTaskName(e.target.value)}
                            />
                            <button className='update' onClick={() => handleSave(task.id)}>Guardar</button>
                            <button className='delete' onClick={handleCancel}>Cancelar</button>
                        </>
                    ) : (
                        <>
                            {task.name}
                            <button className='delete' onClick={() => deleteTask(task.id)}>Eliminar</button>
                            <button className='update' onClick={() => handleEdit(task.id)}>Editar</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (taskId) => dispatch(deleteTask(taskId)),
        updateTask: (taskId, updateTask) => dispatch(updateTask(taskId, updateTask))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
