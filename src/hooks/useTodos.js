import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const useTodos = () => {
    const { dispatch } = useContext(TodoContext);
    const url = "http://localhost:4000/todos";
    const addTodo = (task) => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        }).then((response) => {
            console.log("response post", response);
            getTodos();
        });
    };

    const updateTodo = (task) => {
        fetch(`${url}/${task.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        }).then((response) => {
            console.log("response put", response);
            getTodos();
        });
    };

    const removeTodo = (index) => {
        fetch(`${url}/${index}`, {
            method: "DELETE",
        }).then((response) => {
            console.log("remove response", response);
            getTodos();
        });
    };

    const getTodos = async () => {
        console.log("getTodos");
        const todoResponse = await fetch(url);
        const data = await todoResponse.json();
        dispatch({ type: "SAVE_TODOS", payload: data });
    };

    return {
        addTodo,
        removeTodo,
        getTodos,
        updateTodo,
    };
};

export default useTodos;
