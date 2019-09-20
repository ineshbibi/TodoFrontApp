import React, { Component } from "react";
import axios from "axios";
import TodoItem from "../TodoItem/todoItem";
import Modal from "../Modal/Modal";
import { Table, Button } from "reactstrap";
import "../css/ListTodo.css";
const initialState = {
  todoList: [],
  prevState: [],
  View: false,
  todoToEdit: "",
  AddFormModal: false,
  type: "",
  newTodo: {
    text: "",
    completed: "",
    completedAt: ""
  },

  url: "http://localhost:3000/todos"
};

class todoList extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    axios.get(this.state.url).then(res => {
      this.setState({
        prevState: res.data,
        todoList: res.data
      });
    });
  }

  /*******************************************Functions*****************************************/

  //Get todos
  getTodoList = () => {
    axios.get(this.state.url).then(res => {
      this.setState({
        todoList: res.data
      });
    });
  };

  //Delete todo

  deleteTodo = p => {
    axios.delete(this.state.url + "/" + p._id).then(res => {
      this.getTodoList();
    });
  };

  //Add todo

  AddTodo = () => {
    axios
      .post(this.state.url, {
        text: this.state.newTodo.text,
        completed: this.state.newTodo.completed,
        completedAt: this.state.newTodo.completedAt
      })

      .then(res => {
        axios.get(this.state.url).then(res => {
          this.setState({
            todoList: res.data,
            newTodo: {
              text: "",
              completed: "",
              completedAt: ""
            }
          });
        });
      })
      .then(this.closeToggle);
  };

  //Edit todo
  EditTodo = () => {
    axios
      .put(this.state.url + "/" + this.state.todoToEdit._id, {
        text: this.state.todoToEdit.text,
        completed: this.state.todoToEdit.completed,
        completedAt: this.state.todoToEdit.completedAt
      })
      .then(res => this.getTodoList())
      .then(this.closeToggle);
  };

  /******************************************* *Toggles****************************************/

  EditToggle = t => {
    this.setState({
      View: true,
      type: "update",
      todoToEdit: t
    });
  };

  closeToggle = () => {
    this.setState({
      View: false,
      type: ""
    });
  };

  AddFormToggle = () => {
    this.setState({
      View: true,
      type: "add"
    });
  };

  render() {
    const { View, todoToEdit, type, newTodo } = this.state;
    const todoList = this.state.todoList.map((t, key) => {
      return (
        <tr key={t._id}>
          <TodoItem todo={t} />
          <td className="buttons">
            <Button color="warning" onClick={() => this.EditToggle(t)}>
              Edit
            </Button>
            <Button color="danger" onClick={() => this.deleteTodo(t)}>
              Delete
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <div className="todo-list">
        <Button
          color="primary"
          onClick={() => this.AddFormToggle()}
          className="Add-Button"
        >
          Add Todo
        </Button>
        <Table striped>
          <thead>
            <tr>
              <th>Text</th>
              <th>Status</th>
              <th>Finish Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{todoList}</tbody>
        </Table>

        <Modal
          View={View}
          todoToEdit={todoToEdit}
          EditTodo={this.EditTodo}
          closeToggle={this.closeToggle}
          type={type}
          newTodo={newTodo}
          AddTodo={this.AddTodo}
        ></Modal>
      </div>
    );
  }
}

export default todoList;
