
import './App.css';
import Icon from '@mui/material/Icon';
import {IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';



function App() {
  const [todos,setTodos]= useState([]);
  const [inputValue,setInputvalue]=useState("");
  const addInput=(e)=>{
setTodos([...todos,inputValue]);
    setInputvalue('');
  }
  const insertValue=(e)=>{
    setInputvalue(e.target.value);
   
  }
  const Delete=(index)=>{
const updatedTodos = todos.filter((_, i) => i !== index);
  setTodos(updatedTodos);
  }
  return (
    <div className="App">
      <div>
        <input type="text" className="input" value={inputValue} onChange={(e)=>{insertValue(e)}} />
        
<Icon color="primary" onClick={(e)=>{addInput(e)}}>add_circle</Icon>


<ul className='includetask'>
  {todos.map((item, index) => (
  <li key={index} className="list">
    {item}
    <button onClick={() => Delete(index)}>DELETE</button>
  </li>
))}
</ul>




      </div>
    </div>
  );
}

export default App;
