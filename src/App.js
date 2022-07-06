import { useReducer } from "react";
import "./App.css";

const globalState = {
  title: "O titulo do contexto",
  body: "O corpo do contexto",
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "muda": {
      console.log("Chamou muda");
      return { ...state, title: "Mudou" };
    }
  }
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;

  return (
    <div className="App">
      <h1>
        {title} {counter}
      </h1>
      <button onClick={() => dispatch({ type: "muda" })}>Click</button>
    </div>
  );
}

export default App;
