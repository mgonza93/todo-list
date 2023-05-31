import {
    CREATETASK,
    UPDATETASK,
    DELETETASK,
    LISTTASKS
} from '../types/types';

const initialState = {
    tasks: []
};

const taskAppReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATETASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case UPDATETASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.taskId ? action.payload.updatedTask : task
                )
            };
        case DELETETASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload)
            };
        case LISTTASKS:
            return {
                ...state,
                tasks: action.payload
            };
        default:
            return state;
    }
};

export default taskAppReducer;
