import React, { useState } from 'react'

const NewTodoForm = ({addTodo}) => {
      const [newItem, setNewItem] = useState("")

const handleSubmit = () => {
  if(newItem === "") return
  addTodo(newItem)
  setNewItem("")

}

  return (
    <form>
      <input
        type="text"
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
      />

      <input type="button" value="Add" onClick={handleSubmit} />
    </form>
  );
}

export default NewTodoForm
