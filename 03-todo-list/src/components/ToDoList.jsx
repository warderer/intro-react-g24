import { useState } from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
  // 1: Los estados de React sirven para guardar información que se va a utilizar en el componente. Esta información tiene la particularidad de que se actualiza automaticamente la vista cuando cambia.
  const [inputValue, setInputValue] = useState('')

  // 4: Añadimos un nuevo estado, para almacenar la lista de tareas
  const [todos, setTodos] = useState([])

  // 5: Modificamos la función handleAdd, para que agregue al estado el Todo cuando se le haga clic al boton de agregar
  const handleAdd = () => {
    if (inputValue.trim()) { // trim limpia espacios en blanco
      setTodos([...todos, inputValue])
      setInputValue('')
    }
  }

  // 6: Función que se ejecutará al borrar un item de la lista
  const handleDeleteItem = (index) => {
    setTodos(todos.filter((todo, i) => i !== index))
  }

  return (
    <>
      <h1>Lista de Tareas</h1>
      {/* 2: Una forma común de trabajar con inputs en React, es usar el evento onChange para guardar la información en el estado apenas es tecleado. La información de un input la tendra event.target.value */}
      <input
        type='text'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      {/* 3: Otra forma de trabajar con eventos es que podemos declarar la función más arriba y solo mandar a llamarla en el evento. Esta es la forma más recomendada */}
      <button onClick={handleAdd}>Agregar</button>
      <ul>
        {/* 7: Iteramos el arreglo de Todos y por cada elemento, renderizamos un componente ToDoItem */}
        {todos.map((todo, index) => (
          <ToDoItem
            key={index}
            todo={todo}
            handleDelete={() => handleDeleteItem(index)}
          />
        ))}
      </ul>
    </>
  )
}
export default ToDoList
