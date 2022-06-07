import { useState } from "react";
import "./App.css";
function getTime() {
  return <div>son las {new Date().toLocaleTimeString()}</div>;
}

function App() {
  const [Time, setTime] = useState(getTime());
  setInterval(() => {
    setTime(getTime());
  }, 1000);
  return <div className="App">Hola mundo react 2022 {Time}</div>;
}

export default App;
