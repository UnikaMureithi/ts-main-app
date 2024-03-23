import React, { useState } from 'react';

// type CounterProps = {
//   initialCount: number;
// };

const Counter = ({ initialCount }: CounterProps) => {
  const [counter, setCounter] = useState<number>(initialCount);

  const handleSetCounter = (increment: number) => () => {
    setCounter((prevCounter) => prevCounter + increment);
  };

  const increments = [-100, -50, -1, 1, 50, 100];

  return (
    <div>
      <h1>Counter {counter}</h1>
      {increments.map((increment) => (
        <button key={increment} onClick={handleSetCounter(increment)}>
          {increment > 0 ? `+${increment}` : increment}
        </button>
      ))}
    </div>
  );
};

export default Counter;



// import React, { useState } from 'react'

// type CounterProps = {
//     initialCount: number;
// };

// const Counter = ({initialCount}: CounterProps) => {
//   const [counter, setCounter] = useState<number>(initialCount);

//   const delayedCount = () => 
//   setTimeout (() => setCounter ((counter) => counter +1), 2000);
//   return (
//     <div>
//     <h1>Counter {counter}</h1>
//     <button onClick={() => setCounter(counter + 1)}>+1</button>
//     <button onClick={delayedCount}>Delayed +1</button>
//     </div>
//   );
// };

// export default Counter;