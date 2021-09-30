export default function Sorter({ items, setItems }) {
    // Methods
    function sortListByNameAZ() {
      const sorted = items.sort((a, b) => a.name.localeCompare(b.name));
  
      setItems([...sorted]);
      localStorage.setItem("items", JSON.stringify(items));
    }

    function sortListByNameZA() {
        const sorted = items.sort((a, b) => b.name.localeCompare(a.name));
    
        setItems([...sorted]);
        localStorage.setItem("items", JSON.stringify(items));
    }

    return (
      <div className="sorting">
        <p>Sort by:</p>
        <p className="button-secondary" onClick={sortListByNameAZ}>
          Name A - Z
        </p>
        <p className="button-secondary" onClick={sortListByNameZA}>
          Name Z - A
        </p>
      </div>
    );
  }