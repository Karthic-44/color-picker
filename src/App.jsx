import { useState } from 'react'
import './App.css'

function App() {
  const [backgroundColor, setBachgroundColor] = useState('#ffffff');
  const colors = ['#ff0000'];

  return (
    <div>
      <h1>Color Picker</h1>
      <div className='color-palette'>
        {colors.map((color,index) =>
        (
           <div key={index} className='color-box' style={{backgroundColor:color}} onClick={() => {}}>

           </div>    
        ))}
      </div>
    </div>
  );
}

export default App
