import React from "react";
import { BaseAddress } from "./Environment/Environment";
import CategoriesTabs from "./Categories/CategoriesTabs"

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
      <CategoriesTabs data={state} />
    </React.Fragment>
  );
}

export default App;
