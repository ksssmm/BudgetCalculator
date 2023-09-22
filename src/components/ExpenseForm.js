import React from "react";

const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleSubmit,
  handleAmount,
  edit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="expense">내용</label>
          <input
            type="text"
            id="charge"
            name="charge"
            className="form-control"
            placeholder="예) 식사"
            value={charge}
            onChange={handleCharge}
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">비용</label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="form-control"
            placeholder="0"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "수정" : "제출"}
      </button>
    </form>
  );
};

export default ExpenseForm;
