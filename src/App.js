import React from "react";
import Container from "@material-ui/core/Container";
import Categories from './Categories/Categories'

function App() {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Categories />
      </Container>
    </React.Fragment>
  );
}

export default App;
