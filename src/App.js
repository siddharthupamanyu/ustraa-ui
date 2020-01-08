import React from "react";
import Categories from "./Categories/Categories";
import { BaseAddress } from "./Environment/Environment";

function App() {
  const [state, setState] = React.useState({});
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${BaseAddress}/homemenucategories/v1.0.1?device_type=mob`
      );
      response.json().then(response => {
        setState(response);
      });
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Categories data={state} />
    </React.Fragment>
  );
}

export default App;
