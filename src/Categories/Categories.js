import React from "react";
import CategoriesTabs from "./CategoriesTabs";

export default function Categories(props) {
  return (
    <React.Fragment>
      <CategoriesTabs data={props.data}/>
    </React.Fragment>
  );
}
