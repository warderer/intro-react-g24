const ToDoItem = ({ todoText, handleDelete }) => {
  return (
    <li>{todoText}
      <button
        className='delete-button'
        onClick={handleDelete}
      >Eliminar
      </button>
    </li>
  )
}
export default ToDoItem
