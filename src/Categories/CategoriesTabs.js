import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ProductList from "./ProductList";
import { ThemeProvider } from "@material-ui/core/styles";
import { BaseAddress } from "../Environment/Environment";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function CategoriesTabs(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    data: {},
    value: 0
  });

  async function handleChange(event, newValue) {
    const categoryId = event.currentTarget.tabIndex;
    console.log(event.currentTarget);
    const response = await fetch(
      `https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${categoryId}`
    );
    response.json().then(data => {
      console.log(data)
      setState({ ...state, data: data, value: newValue });
    });
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={state.value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {props.data.category_list
            ? props.data.category_list.map(value => {
                console.log(value);
                return (
                  <Tab
                    key={value.category_id}
                    tabIndex={value.category_id}
                    label={value.category_name}
                    background={value.category_image}
                  />
                );
              })
            : ""}
        </Tabs>
      </AppBar>
      {state.data.products
        ? state.data.products.map(value => {
            return <ProductList data={value} key={value.id} />;
          })
        : ""}
    </div>
  );
}
