import React, { Fragment } from "react";
function todoItem({ todo }) {
  return (
    <Fragment>
      <td>{todo.text}</td>
      <td>
        {todo.completed.toString() === "false" && (
          <div className="d-block w-100 text-center">
            <span className="badge badge-warning"> Not yet</span>
          </div>
        )}
        {todo.completed.toString() === "true" && (
          <div className="d-block w-100 text-center">
            <span className="badge badge-success"> Done </span>
          </div>
        )}
      </td>
      <td>{todo.completedAt}</td>
    </Fragment>
  );
}

export default todoItem;
