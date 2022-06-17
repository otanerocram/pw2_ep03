import { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import { Container, Row, Col, Card } from "react-bootstrap";

function App() {
    const [todos, setTodos] = useState([]);
    const [shouldFetch, reFetch] = useState({});

    const addTodo = (text) => {
        const newTodos = [{ text: text, isCompleted: false }, ...todos];
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        let temp = [...todos];
        temp.splice(index, 1);
        setTodos(temp);
    };

    const reloadTodos = async () => {
        const todoRespoonse = await fetch("http://localhost:4000/todos");
        const todoList = await todoRespoonse.json();
        setTodos(todoList);
    };

    useEffect(() => {
        reloadTodos();
    }, [shouldFetch]);

    return (
        <Container fluid>
            <Row>
                <Col xs={12} className="App">
                    <Card className="my-card">
                        <Card.Title className="my-app-title">
                            <h1>Todo List App</h1>
                        </Card.Title>
                        <Card.Body>
                            <div className="my-container">
                                <TodoForm addTodo={addTodo} />
                                {todos.map((todo, i) => (
                                    <Todo index={i} key={i} todo={todo} remove={removeTodo} />
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="my-card">
                        <Card.Title className="my-app-title">
                            <h1>Todo List App</h1>
                        </Card.Title>
                        <Card.Body>
                            <div className="my-container">
                                <TodoForm addTodo={addTodo} />
                                {todos.map((todo, i) => (
                                    <Todo index={i} key={i} todo={todo} remove={removeTodo} />
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
