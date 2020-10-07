import React from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <section className="ingredien-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title"></input>
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount"></input>
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
