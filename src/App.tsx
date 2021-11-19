import React, { useState, useRef, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import "./App.css";
import Todo from "./Compoents/Todo";
import axios from "axios";

const Todos = React.createContext([]);

function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${""}&appid=${"98a586df2b167daa68ce83f0160143a4"}&units=metric`;
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  const inputValue = useRef<any>(null);
  const [input, inputGet] = useState<string>("");
  const [items, setItems] = useState([] as any);

  useEffect(() => {
    inputValue.current.focus();
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .get(url, config)
      .then((data: any) => console.log(data))
      .catch((err: any) => console.log(err));
  };

  console.log(input);
  return (
    <>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <input
          name="todo"
          ref={inputValue}
          value={input}
          onChange={(e: any) => inputGet(e.target.value)}
        />
        <Button type="submit">Add Todo</Button>
      </form>
      <Todos.Provider value={items}>
        <Todo />
      </Todos.Provider>
    </>
  );
}

export default App;
