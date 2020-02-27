import React from "react";

import { Container } from "./styles";
import SearchBar from "../../components/SearchBar";

export default function Home() {
  return (
    <div>
      <Container>
        <SearchBar />
      </Container>
    </div>
  );
}
