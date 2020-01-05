import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ProductList from "./ProductList";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

// function a11yProps(index) {
//     return {
//       id: `scrollable-auto-tab-${index}`,
//       'aria-controls': `scrollable-auto-tabpanel-${index}`,
//     };
//   }

export default function CategoriesTabs() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" />
        </Tabs>
      </AppBar>
      <ProductList value={value} index={0}>
        Item One
      </ProductList>
      <ProductList value={value} index={1}>
        Item Two
      </ProductList>
      <ProductList value={value} index={2}>
        Item Three
      </ProductList>
      <ProductList value={value} index={3}>
        Item Four
      </ProductList>
      <ProductList value={value} index={4}>
        Item Five
      </ProductList>
      <ProductList value={value} index={5}>
        Item Six
      </ProductList>
      <ProductList value={value} index={6}>
        Item Seven
      </ProductList>
    </div>
  );
}
