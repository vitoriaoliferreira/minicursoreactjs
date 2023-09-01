import { useState } from "react";
import { Container, Main } from "./style";

import Header from "./components/Header";

import "./reset.css";

export default function App() {
  return (
    <Container>
      <Header />

      <Main>
        Fome
      </Main>
    </Container>
  );
}