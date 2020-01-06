import React from "react";
// import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  },
  cardMedia: {
    height: 200,
    maxWidth: 200
    //paddingTop: "56.25%", // 16:9,
    //marginTop: "30"
  }
}));

// const useStyles = makeStyles({
//   cardMedia: {
//     height: 520,
//     //paddingTop: "56.25%", // 16:9,
//     //marginTop: "30"
//   }
// });

export default function ProductList(props) {
  const classes = useStyles();
  const theme = useTheme();

  const {
    name,
    image_urls: img,
    weight,
    weight_unit: unit,
    price,
    final_price: fp,
    rating,
    is_in_stock,
    ...other
  } = props.data;

  return (
    <Card>
      <CardMedia
        className={classes.cardMedia}
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image={img.x200}
        title="Contemplative Reptile"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="Previous">
          </IconButton>
          <IconButton aria-label="Play/pause">
          </IconButton>
          <IconButton aria-label="Next">
          </IconButton>
        </div>
      </div>
      {console.log(name, img)}
      {/* <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography> */}
    </Card>
  );
}
