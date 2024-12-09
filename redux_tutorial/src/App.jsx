import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './app/Components/Todos'
import AddTodo from './app/Components/AddTodo'

function App() {
  return (
    <>
      <h1>Learn About Redux</h1>
     <AddTodo></AddTodo>
     <Todos></Todos>
    </>
  )
}

export default App
