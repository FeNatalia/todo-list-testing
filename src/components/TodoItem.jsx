export default function TodoItem({ item, markAsDone }) {
    const { id, name, isDone } = item;
    return (
      <div className={isDone === false ? "items" : "completed-items"}>
        {isDone === false && (
          <div className="checkbox-item">
            <input type="checkbox" onChange={() => markAsDone(id)} />
          </div>
        )}
        <p>{name}</p>
      </div>
    );
  }