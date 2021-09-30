// NPM Packages
import { useState } from "react";

// Project files
import ButtonAddItem from "../components/ButtonAddItem";
import ButtonToggle from "../components/ButtonToggle";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import Sorter from "../components/Sorter";

export default function NormalScreen({ items, setItems }) {
  // Local state
  const [toggleCompletedList, setCompletedList] = useState(false);

  const CompletedItems = items
    .filter((item) => item.isDone)
    .map((item) => <TodoItem key={item.id} item={item} />);

  return (
    <div className="main-page">
      <h1>My shopping list</h1>
      <Sorter items={items} setItems={setItems} />
      <TodoList items={items} setItems={setItems} />
      <ButtonAddItem items={items} setItems={setItems} />
      {CompletedItems.length > 0 && (
        <ButtonToggle
          toggleCompletedList={toggleCompletedList}
          onClick={() =>
            toggleCompletedList
              ? setCompletedList(false)
              : setCompletedList(true)
          }
        />
      )}
      {toggleCompletedList && CompletedItems}
    </div>
  );
}