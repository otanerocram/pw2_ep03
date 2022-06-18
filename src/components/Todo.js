import { useState } from "react";
import { BsFillTrashFill, BsCheckCircleFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { RiEdit2Fill } from "react-icons/ri";
import { Form, Button } from "react-bootstrap";

export default function Todo({ todo, index, remove, update }) {
    const [taskName, setTaskName] = useState(todo.task);
    const [readOnly, setReadOnly] = useState(true);

    function removeThis() {
        remove(index);
    }

    function updateThis() {
        const copyTodo = { ...todo };

        copyTodo.done = !copyTodo.done;
        update(copyTodo);
    }

    const editThis = () => {
        setReadOnly(false);
    };

    const handleEdit = (e) => {
        e.preventDefault();
        setTaskName(e.target.value);
    };

    const detectEnter = (e) => {
        if (e.key === "Enter") {
            setReadOnly(true);
        }

        const copyTodo = { ...todo };
        copyTodo.task = taskName;
        update(copyTodo);
    };

    const icon = todo.done ? <ImCross /> : <BsCheckCircleFill />;

    const color = todo.done ? "outline-secondary" : "outline-success";

    return (
        <div className="todo">
            <div className="">
                <Form.Control
                    type="text"
                    value={taskName}
                    size="lg"
                    placeholder="Agregar Tarea..."
                    onChange={handleEdit}
                    onKeyPress={detectEnter}
                    readOnly={readOnly}
                />
            </div>
            <div>
                <Button className="mx-2" variant="outline-primary" onClick={editThis}>
                    <RiEdit2Fill />
                </Button>
                <Button className="mx-2" variant={color} onClick={updateThis}>
                    {icon}
                </Button>
                <Button variant="outline-danger" onClick={removeThis}>
                    <BsFillTrashFill />
                </Button>
            </div>
        </div>
    );
}
