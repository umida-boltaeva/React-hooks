import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const inputState = useState({ title: "", amount: "" });

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <section className="ingredien-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={inputState[0].title}
              onChange={(event) => {
                const newTitle = event.target.value;
                inputState[1]((prevInputState) => ({
                  title: newTitle,
                  amount: inputState[0].amount,
                }));
              }}
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={inputState[0].amount}
              onChange={(event) => {
                const newAmount = event.target.value;
                inputState[1]((prevInputState) => ({
                  amount: newAmount,
                  title: inputState[0].title,
                }));
              }}
            ></input>
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredients</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
