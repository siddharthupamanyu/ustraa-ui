import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import { Tabs, Tab } from "@material-ui/core";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  button: {
    textTransform: "none"
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 300,
    width: 150
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    anchorEl: null,
    open: false,
    value: 0
  });

  const changeCategory = event => {
    const getAnchor = state.anchorEl ? null : event.currentTarget;
    setState({ ...state, anchorEl: getAnchor, open: true });
  };

  const handleClick = () => {
    props.changeView();
  };

  const handleChange = (event, newValue) => {
    props.changeCategory(event, newValue);
    setState({ ...state, open: false, value: newValue });
  };

  return (
    <React.Fragment>
      <ButtonGroup variant="text">
        <Button onClick={changeCategory} className={classes.button}>
          {`Showing for ${props.changeString}       change`}
        </Button>
        <Popper open={state.open} anchorEl={state.anchorEl}>
          <div className={classes.root}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              onChange={handleChange}
              value={state.value}
            >
              {props.category
                ? props.category.map(value => {
                    return (
                      <Tab
                        key={value.category_id}
                        id={value.category_id}
                        label={value.category_name}
                      />
                    );
                  })
                : ""}
            </Tabs>
          </div>
        </Popper>
        <Button onClick={handleClick} className={classes.button}>
          {props.viewString}
        </Button>
      </ButtonGroup>
    </React.Fragment>
  );
}

Footer.propTypes = {
  changeString: PropTypes.string.isRequired,
  viewString: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
  changeCategory: PropTypes.func.isRequired,
  category: PropTypes.array.isRequired
};
