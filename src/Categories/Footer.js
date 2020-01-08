import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function Footer(props) {
  const handleClick = e => {
    if (e.currentTarget.id === "more") {
      props.changeView();
    } else {
      props.changeCategory();
    }
  };
  return (
    <React.Fragment>
      <ButtonGroup variant="text">
        <Button id="tabs" onClick={handleClick}>
          Showing for Beard change
        </Button>
        <Button id="more" onClick={handleClick}>
          {props.viewString}
        </Button>
      </ButtonGroup>
    </React.Fragment>
  );
}
