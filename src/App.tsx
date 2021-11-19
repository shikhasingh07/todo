import React, { useState, useRef } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import "./App.css";
import Todo from "./Compoents/Todo";
import axios from "axios";

const Todos = React.createContext([]);

function App() {
  const url =
    "http://52.143.94.185:8080/api/products.json?crafterSite=test__shikha";
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  const inputValue = useRef<string>("");
  const [items, setItems] = useState([] as any);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .get(url, config)
      .then((data: any) => console.log(data))
      .catch((err: any) => console.log(err));
  };
  console.log(inputValue);
  return (
    <>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <TextField
          name="todo"
          // ref={inputValue}
          // onChange={(e: any) => setWeather(e.target.value)}
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
