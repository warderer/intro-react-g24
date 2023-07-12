import { useState } from 'react'

const ToDoList = () => {
  // 1: Los estados de React sirven para guardar información que se va a utilizar en el componente. Esta información tiene la particularidad de que se actualiza automaticamente la vista cuando cambia.
  const [inputValue, setInputValue] = useState('')

  const handleAdd = () => {
    console.log('Agregue', inputValue)
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
        <li>Item 1<button>Eliminar</button></li>
        <li>Item 2<button>Eliminar</button></li>
        <li>Item 3<button>Eliminar</button></li>
      </ul>
    </>
  )
}
export default ToDoList
