import React, { useState } from "react";
// it won't submit and I cannot work out why
function Form(props) {
  const [userInput, setUserInput] = useState('');

  function handleChange(e) {
    setUserInput(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(userInput);
    setUserInput("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>
        <label>
          What needs to be done?
        </label>
      </h2>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder='Add an item...'
      />
      <button onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}

export default Form;