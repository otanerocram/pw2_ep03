import { useState, useEffect, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const useFetch = (url) => {
    const { dispatch } = useContext(TodoContext);
    const [list, setTodoList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const todoResponse = await fetch(url);
            const data = await todoResponse.json();
            setTodoList(data);
            dispatch({ type: "SAVE_TODOS", payload: data });
        };
        fetchData();
    }, [url, dispatch]);

    return { list };
};

export default useFetch;
