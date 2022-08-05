
import './App.css';
import React , {useEffect, useState} from 'react'
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';


const getLocalItems=()=>
{
  let list=localStorage.getItem('lists');

  if(list)
  {
    return JSON.parse(localStorage.getItem('lists'));

  }

  else return [];
}

function App() {
  

  const [todo , setTodo ] = useState("");
  const [todos , setTodos ]=useState(getLocalItems());
  const [editId , setEditId] = useState(0);

  const handleEdit=(id)=>
  {
    const editTodo = todos.find((i)=>i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  }

  const handleSubmit=(e)=>
  {
    e.preventDefault();
    if(editId)
    {
      const editTodo = todos.find((i)=> i.id === editId);
      const updatedTodos=todos.map((t)=>
      t.id=== editTodo.id?t={id:t.id , todo}:{id:t.id , todo:t.todo}
      )

      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if(todo!=="")
    {
      setTodos([{id:`${todo}-${Date.now()}`,todo},...todos]);
      setTodo("");
    }
  }

  const handleDelete = (id)=>
  {
    const delTodo =todos.filter((to)=>to.id !== id);
    setTodos([...delTodo]);
  }

  useEffect(()=>
  {
    localStorage.setItem('lists',JSON.stringify(todos))
  },[todos]);

 
  return (
    <div className="App">
      <div className="container">
        <div className="text">To-Do List</div>
        <div className="box">
          <form onSubmit={handleSubmit}>
          <input type="textarea" value={todo} onChange={(e)=> setTodo(e.target.value)} placeholder="Enter an item"></input>
          <button type="submit">{editId?"Edit":"Create"}</button>
          </form>
        </div>

       {
        todos.map((t)=>
        (
        <div className="todo" key={t.id}>
          <div className="textarea">{t.todo}</div>
        <div className="buttons">
          <button onClick={()=> handleEdit(t.id)}> <FiEdit className="operation_button"/></button>
          <button onClick={()=> handleDelete(t.id)}> <AiFillDelete className="operation_button"/></button>
        </div>
        </div>
        ))
       }
        

        
      </div>
     
    </div>
  );
}

export default App;
