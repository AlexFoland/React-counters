/*onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp*/

// git master 2.0

import React from 'react';
import './index.scss';

function App() {
  const [countOne, setCount] = React.useState(0);

  const onClickPlus = () => {
    setCount(countOne + 1);
    console.log(countOne);

  };
  const onClickMinus = () => {
    setCount(countOne - 1);
    console.log(countOne);
  };
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{countOne}</h1>
        <button onClick={onClickMinus} className="minus">- Минус</button>
        <button onClick={onClickPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
