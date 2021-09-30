// Project files
import TodoItem from "../components/TodoItem";

export default function TodoList({ items, setItems }) {
  // Methods
  function markAsDone(id) {
    const newItems = [...items].map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setItems(newItems);
  }

  //Lists
  const UncompletedItems = items
    .filter((item) => !item.isDone)
    .map((item) => (
      <TodoItem key={item.id} item={item} markAsDone={markAsDone} />
    ));

  return (
    <div>
      {UncompletedItems.length > 0 
      ? (UncompletedItems) 
      : (<p>No pending items to show</p>
      )}
    </div>
  );
}