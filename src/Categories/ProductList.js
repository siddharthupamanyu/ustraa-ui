import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/Star";
import Grid from "@material-ui/core/Grid";

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText("#73da4d"),
    backgroundColor: "#73da4d"
  }
}))(Button);

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex"
  },
  margins: {
    paddingBottom: 10
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cardMedia: {
    height: 120,
    maxWidth: 120
  },
  button: {
    display: "block",
    marginTop: 5,
    color: "white",
    borderRadius: 0
  },
  rating: {
    color: "#9e9e9e",
    position: "inherit",
    right: 0,
    top: 5
  },
  starIcon: {
    fontSize: 14
  },
  price: {
    textDecoration: "line-through",
    paddingTop: 7,
    paddingLeft: 5
  }
}));

export default function ProductList(props) {
  const classes = useStyles();
  const {
    name,
    image_urls: img,
    weight,
    weight_unit: unit,
    price,
    final_price: fp,
    rating,
    is_in_stock: iis,
    ...other
  } = props.data;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        component="img"
        alt="Image not Available"
        height="140"
        image={img.x120}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="subtitle1" component="h2">
            {name}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {rating ? rating : 0}
            <StarIcon className={classes.starIcon} />
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {weight ? `(${weight} ${unit})` : ""}
          </Typography>
          <Grid container>
            <Typography inline="true" variant="h6">
              {`₹ ${fp}`}
            </Typography>
            <Typography
              inline="true"
              className={classes.price}
              variant="subtitle2"
              color="textSecondary"
            >
              {`₹ ${price}`}
            </Typography>
          </Grid>
          <ColorButton
            className={classes.button}
            variant="contained"
            color="primary"
            disabled={iis ? false : true}
            disableElevation
          >
            {iis ? "ADD TO CART" : "OUT OF STOCK"}
          </ColorButton>
        </CardContent>
      </div>
    </Card>
  );
}

ProductList.propTypes = {
  data: PropTypes.object.isRequired,
  key: PropTypes.number.isRequired
}