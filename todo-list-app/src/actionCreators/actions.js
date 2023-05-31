import { 
CREATETASK, 
UPDATETASK, 
DELETETASK, 
LISTTASKS } from '../types/types';

export const createTask = (task) => {
  return {
    type: CREATETASK,
    payload: task
  };
};

export const updateTask = (taskId, updatedTask) => {
  return {
    type: UPDATETASK,
    payload: { taskId, updatedTask }
  };
};

export const deleteTask = (taskId) => {
  return {
    type: DELETETASK,
    payload: taskId
  };
};

export const listTasks = (tasks) => {
  return {
    type: LISTTASKS,
    payload: tasks
  };
};
