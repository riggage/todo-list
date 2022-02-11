import React, { useState } from "react";
export default function Todo(props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');
    function handleChange(e) {
        setNewName(e.target.value);
      }      
      function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
      }
      <form onSubmit={handleSubmit}></form>      
    const editingTemplate = (
        <form>
          <div>
            <label htmlFor={props.id}>
              New name for {props.name} 
            </label>
            <input id={props.id} value={newName} onChange={handleChange}/>
          </div>
          <div>
          <button onClick={() => setEditing(false)}>
              Cancel <span>renaming {props.name}</span>
          </button>
            <button onClick={() => setEditing(true)}>
              Save <span>new name for {props.name} </span>
            </button>
          </div>
        </form>
      );
      const viewTemplate = (
        <div>
          <div>
              <input
                id={props.id}
                type="checkbox"
                defaultChecked={props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)}
              />
              <label htmlFor={props.id}>
                {props.name}
              </label>
            </div>
            <div>
            <button onClick={() => setEditing(true)}>
                Edit <span>{props.name}</span>
            </button>

            <button onClick={() => props.deleteTask(props.id)}>
                Delete <span>{props.name}</span>
            </button>
            </div>
        </div>
      );
      
    return <li>{isEditing ? editingTemplate : viewTemplate}</li>;
}
  