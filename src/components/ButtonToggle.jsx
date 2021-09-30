export default function ButtonToggle({toggleCompletedList, onClick}){
    return (
        <div>
            <button
            className="button-secondary"
            onClick={onClick}
          >
            {toggleCompletedList === false
              ? "View completed todos"
              : "Hide completed todos"}
          </button>
        </div>
    )
}