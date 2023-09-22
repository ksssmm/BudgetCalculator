import React from "react";
import ExpenseItem from "./ExpenseItem";

const Lists = ({ expenses, handleDelete, handleEdit, handleRemoveClick }) => {
  return (
    <>
      <ul>
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button
          onClick={handleRemoveClick}
          className="btn"
        >
          목록 지우기
        </button>
      )}
    </>
  );
};

export default Lists;
