import { createContext, useReducer } from "react";

export const TodoContext = createContext();

const TodoReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "LOAD_TODOS":
            return {
                ...state,
            };
        case "CLEAN_TODOS":
            return {
                ...state,
                todoList: [],
            };
        case "SAVE_TODOS":
            return {
                ...state,
                todoList: payload,
            };
        case "ADD_TODO":
            return {
                ...state,
                todoList: [payload, ...state.todoList],
            };

        default:
            return state;
    }
};

const TodoState = (props) => {
    const initialState = {
        todoList: [],
    };

    const [state, dispatch] = useReducer(TodoReducer, initialState);

    return <TodoContext.Provider value={{ state, dispatch }}>{props.children}</TodoContext.Provider>;
};

export default TodoState;
