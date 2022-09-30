import { useState } from 'react';


const Section = () => {
  const [count, setCount] = useState(0)
  
  const handleInc = () => {
      setCount(count + 1)
  }
  
  const handleDec = () => {
    if (count > 0) {
      setCount(count - 1)
      }
  }

  const handleReset = () => {
    setCount(0)
  }

    return (
    <div id="section">
        <div id="section-figure">{count}</div>
    <div id="section-button">
      <button id="section-1" onClick={handleInc}>УВЕЛИЧИТЬ</button>
      <button id="section-2" onClick={handleDec}>УМЕНЬШИТЬ</button>
      <button id="section-3" onClick={handleReset}>СБРОСИТЬ</button>
    </div>
     </div>
     
    );
};

export default Section;