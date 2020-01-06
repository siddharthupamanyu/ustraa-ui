import React from "react";
import Container from "@material-ui/core/Container";
import Categories from "./Categories/Categories";
import { BaseAddress } from "./Environment/Environment";

function App() {
  const [state, setState] = React.useState({});
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${BaseAddress}?device_type=mob`);
      response.json().then(response => {
        setState(response);
      })
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Categories data={state} />
      </Container>
    </React.Fragment>
  );
}

export default App;
