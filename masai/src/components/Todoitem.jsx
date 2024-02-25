
// function Todoitem({id,title,status,AddToggle,DeleteToggle}){
//     return(
//     <div>
//     <li >{title}-{status ? "Completed" : "NotCompleted"}</li>
//     <button onClick={()=> AddToggle(id)}>TOGGLE</button>
//     <button onClick={()=> DeleteToggle(id)}>DELETE</button>
//     </div>
//     )
// }

// export default Todoitem



import React from 'react';

function Todoitem({ id, title, status, AddToggle, DeleteToggle }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={status}
        onChange={() => AddToggle(id)}
      />
      <label style={{ textDecoration: status ? 'line-through' : 'none' }}>
        {title}
      </label>
      <button onClick={() => DeleteToggle(id)}>DELETE</button>
    </div>
  );
}

export default Todoitem;

