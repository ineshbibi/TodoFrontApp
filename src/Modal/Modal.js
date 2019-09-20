import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import TodoForm from "../TodoForm/todoForm";
function index({
  type,
  View,
  todoToEdit,
  newTodo,
  closeToggle,
  EditTodo,
  AddTodo
}) {
  return (
    <Modal isOpen={View} className="mondal">
      <ModalHeader>
        <svg
          className="close"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
          onClick={closeToggle}
        >
          <path d="M9 1C4.58 1 1 4.58 1 9s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4 10.87L11.87 13 9 10.13 6.13 13 5 11.87 7.87 9 5 6.13 6.13 5 9 7.87 11.87 5 13 6.13 10.13 9 13 11.87z" />
        </svg>
      </ModalHeader>

      <ModalBody>
        {type === "update" && <TodoForm todo={todoToEdit}></TodoForm>}
        {type === "add" && <TodoForm todo={newTodo}></TodoForm>}
      </ModalBody>
      <ModalFooter>
        {type === "update" && (
          <Button color="success" onClick={EditTodo}>
            Validate
          </Button>
        )}
        {type === "add" && (
          <Button color="success" onClick={AddTodo}>
            Validate
          </Button>
        )}
      </ModalFooter>
    </Modal>
  );
}
export default index;
