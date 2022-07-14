import { useEffect, useRef, useState } from "react";
import "./App.css";

const useMyHook = (cb, delay = 1000) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCb.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

// App.jsx
function App() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  useMyHook(() => setCount((c) => c + 1), delay);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <h2>Delay: {delay}</h2>
      <button onClick={() => setDelay((d) => d + incrementor)}>
        +{incrementor}
      </button>
      <button onClick={() => setDelay((d) => d - incrementor)}>
        -{incrementor}
      </button>
      <input
        type="number"
        value={incrementor}
        onChange={(e) => {
          setIncrementor(Number(e.target.value));
        }}
      />
    </div>
  );
}

export default App;
