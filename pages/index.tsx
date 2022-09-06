import axios from "axios";
import type { NextPage } from "next";
import { useState } from "react";
import { Todo } from "../component/Todo";

type Todotype = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const Home: NextPage = () => {
  const [todos, setTodos] = useState<Array<Todotype>>([]);

  const onClickFetchDate = () => {
    axios.get<Array<Todotype>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };

  return (
    <div>
      <button onClick={onClickFetchDate}>データ取得</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userId={todo.userId} completed={todo.completed} key={todo.id} />
      ))}
    </div>
  );
};

export default Home;
