import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
  
  return (
    <div>
      hi there
      <CreateTodo />
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
