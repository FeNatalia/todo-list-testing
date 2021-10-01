// Project files
import TodoPhoto from "../assets/images/todo.jpg";
import ButtonAddItem from "../components/ButtonAddItem";

export default function Instructions({ items, setItems }) {
  return (
    <div className="main-page">
      <div className="main-header">
        <h1>Welcome to ToDoApp!</h1>
        <h3>We help you to stay organized</h3>
      </div>
      <div className="card">
        <div className="card-upper">
          <img
            src={TodoPhoto}
            alt="a hand is holding a pen and writing todos on paper"
          />
        </div>
        <div className="card-bottom">
          <h2>Start now</h2>
          <p>
            Add your todos by clicking the button below, store and mark them
            done to archive
          </p>
        </div>
      </div>
      <ButtonAddItem items={items} setItems={setItems} />
    </div>
  );
}