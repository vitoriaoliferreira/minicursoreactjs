import { useState } from "react";
import { Container, Main } from "./mainStyle";

import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";
import NewTask from "./components/NewTask";

import Tasks from "./components/Tasks";

import "./reset.css";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      isComplete: false,
      title: "texto...",
    },
    {
      id: uuidv4(),
      isComplete: true,
      title: "texto2...",
    },
  ]);

  return (
    <Container>
      <Header />

      <Main>
      <NewTask tasks={tasks} setTasks={setTasks} />
	    <Tasks tasks={tasks} setTasks={setTasks} />
      </Main>
    </Container>
  );
}