import Searching from './searching';
import React, {useState} from 'react';
function App() {
const [todos, setTodos] = useState([
  {text: 'pay bills', id:1},
  {text: 'Homework', id:2},
  {text: 'Dinner', id:3}
]);

const [count, setCount] = useState(0);

  const onSearchSubmit = (entry) => {
     console.log(entry)
     setTodos([
    ...todos,
    {text: entry, id: Math.random()}
  ]);
  }

  const handleRemoveTodo = e => {
  const id = e.target.id;
  console.log(e)
  console.log(id)
  setTodos(todos.filter((todo) => {
  return todo.id !== Number(id);
  }))
};
  return (
    <div className="App">
      <header className="App-header">
        <p>
        React assignment
        </p>
        <ul >
                {todos.map((i) =>{
                  return (
                    <li  id={i.id} key={i.id} onClick={handleRemoveTodo}>{i.text}</li>
                  )
                })}
              </ul>

        <Searching onSearchSubmit={onSearchSubmit} />
        <button onClick={() => setCount(count + 1)}>Score: {count} </button>
      </header>
    </div>
  );
};

export default App;
