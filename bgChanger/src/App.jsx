import { useState } from 'react'

import './App.css'
import ColorComponents from './Components/ColorComponents';
import ColorTab from './Components/ColorTab';

function App() {
  
  const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
  const [selectedColor, setSelectedColor] = useState('red');
  function updateColor(color){
    setSelectedColor(color);
  }
  return (
    <>
    <ColorComponents color={selectedColor}></ColorComponents>
    <ColorTab colors={colors} updateColor = {updateColor}></ColorTab>
    </>
  )
}

export default App
