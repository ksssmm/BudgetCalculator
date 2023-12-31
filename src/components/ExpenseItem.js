import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const ExpenseItem = ({
  expense: { id, charge, amount },
  handleDelete,
  handleEdit,
}) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">{amount} 원</span>
      </div>
      <div >
        <button
          className="edit-btn"
          onClick={() => handleEdit(id)}
        >
          <MdEdit />
        </button>
        <button
          className="clear-btn"
          onClick={() => handleDelete(id)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
