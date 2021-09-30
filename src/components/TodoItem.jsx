export default function TodoItem({ item, markAsDone }) {
    const { id, name, isDone } = item;
    return (
      <div className={isDone === false ? "items" : "completed-items"}>
        {isDone === false && (
          <div>
            <input type="checkbox" onChange={() => markAsDone(id)} />
          </div>
        )}
        <p>{name}</p>
      </div>
    );
  }