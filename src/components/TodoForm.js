import { useState } from "react";
import { Form } from "react-bootstrap";
import Swal from 'sweetalert2'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const myAlert = (text) => {
    Swal.fire({
      title: 'Error!',
      text: text,
      icon: 'error'
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return myAlert("You need to add elements");
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        value={value}
        size="lg"
        placeholder="Add Todo ..."
        onChange={(e) => setValue(e.target.value)}
      />
    </Form>
  );
};

export default TodoForm;
