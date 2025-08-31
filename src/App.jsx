import { useState } from 'react'
import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const colors = ['#ff0000', '#2761F5', '#E5F01D', '#23f110ff', '#ee0feeff', '#000000ff', '#ffffffff'];

  const handleColorChange = (color) => {
    setBackgroundColor(color);    
  };

  return (
    <div style={{backgroundColor}}>
      <h1>Color Picker</h1>
      <div className='color-palette'>
        {colors.map((color,index) =>
        (
           <div 
            key={index} 
            className='color-box' 
            style={{backgroundColor:color}} 
            onClick={() => handleColorChange(color)}>

           </div>    
        ))}
      </div>
    </div>
  );
}

export default App
