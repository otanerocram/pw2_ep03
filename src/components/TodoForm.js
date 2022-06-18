import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import Swal from "sweetalert2";

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const myAlert = (text) => {
        Swal.fire({
            title: "Error!",
            text: text,
            icon: "error",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return myAlert("No se puede agregar una tarea vacía");
        addTodo({
            task: value,
            done: false,
        });
        setValue("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <Form.Control
                    type="text"
                    value={value}
                    size="lg"
                    placeholder="Agregar Tarea..."
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button variant="primary" type="submit">
                    Nueva Tarea
                </Button>
            </InputGroup>
        </Form>
    );
};

export default TodoForm;
