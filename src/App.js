import { useState, useEffect, useContext } from "react";
import "./App.css";
import { TodoContext } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import { Container, Row, Col, Card } from "react-bootstrap";
import useTodos from "./hooks/useTodos";

function App() {
    const { state } = useContext(TodoContext);
    const { addTodo, removeTodo, getTodos, updateTodo } = useTodos();
    const [shouldFetch] = useState({});

    useEffect(() => {
        getTodos();
        /* eslint-disable-next-line */
    }, [shouldFetch]);

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>Programación Web II - EP03</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TodoForm addTodo={addTodo} />
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="App">
                    <Card className="my-card">
                        <Card.Title className="my-app-title">Tareas por realizar</Card.Title>
                        <Card.Body>
                            <div className="my-container">
                                {state?.todoList?.length
                                    ? state?.todoList
                                          ?.filter((todo) => !todo.done)
                                          .map((todo) => (
                                              <Todo
                                                  index={todo.id}
                                                  key={todo.id}
                                                  todo={todo}
                                                  remove={removeTodo}
                                                  update={updateTodo}
                                              />
                                          ))
                                    : "no hay tareas"}
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="my-card">
                        <Card.Title className="my-app-title">Tareas realizadas</Card.Title>
                        <Card.Body>
                            <div className="my-container">
                                {state?.todoList?.length
                                    ? state?.todoList
                                          ?.filter((todo) => todo.done)
                                          .map((todo) => (
                                              <Todo
                                                  index={todo.id}
                                                  key={todo.id}
                                                  todo={todo}
                                                  remove={removeTodo}
                                                  update={updateTodo}
                                              />
                                          ))
                                    : "no hay tareas"}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
