import React, { Component } from "react";
import { Input, Label } from "reactstrap";
import TextareaAutosize from "react-textarea-autosize";
class todoForm extends Component {
  render() {
    const { todo } = this.props;
    return (
      <div className="todo-list">
        <Label>Text</Label>
        <TextareaAutosize
          className="form-control"
          id="text-todo"
          name="text-todo"
          required
          value={todo.text}
          onChange={e => {
            todo.text = e.target.value;
            this.setState({ todo });
          }}
        ></TextareaAutosize>

        <Label>Completed</Label>
        <select
          className="form-control"
          id="completed"
          name="completed"
          required
          value={todo.completed}
          onChange={e => {
            todo.completed = e.target.value;
            this.setState({ todo });
          }}
        >
          <option value="">Select a state</option>
          <option value="false">Not yet</option>
          <option value="true">Done</option>
        </select>

        <Label>Finish Date</Label>
        <Input
          type="date"
          id="finishDate"
          name="finishDate"
          required
          value={todo.completedAt}
          onChange={e => {
            todo.completedAt = e.target.value.toString();
            this.setState({ todo });
          }}
        ></Input>
      </div>
    );
  }
}
export default todoForm;
