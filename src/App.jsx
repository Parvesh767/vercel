import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import myImage from './resource/Sun.jpeg';
import Form from './components/Form';

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState([]);
  const [task, setTask] = useState({ name: '', quantity: '', price: '' });
  const [item, setItem] = useState({});


  const handleInput = (event) => {
    console.log(event.target.value)
    setTask(event.target.value);
  }




  return (
    <>
      <Form />
    </>
  )
}

export default App
