// NPM Packages
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form({ onSubmit }) {
  // Local state
  const [name, setName] = useState("");

  // Methods
  function handleSubmit(e) {
    e.preventDefault();
    if (inputValidation()) {
      onSubmit({
        id: uuidv4(),
        name: name,
        isDone: false,
      });

      setName("");
    }
  }

  function inputValidation() {
    if (name.trim() === "") {
      return alert("You must write the item name");
    } else {
      return true;
    }
  }

  return (
    <div className="todo-form">
      <h3>Add a new todo:</h3>
      <div>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button className="button-main" type="button" onClick={handleSubmit}>
        Add item
      </button>
    </div>
  );
}