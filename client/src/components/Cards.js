import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import PopUp from "./PopUp";
import { bookData } from "../../src/mockData";
const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(3),
    width: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.only("sm")]: {
      width: 250,
    },
    [theme.breakpoints.only("xs")]: {
      width: "90%",
      maxWidth: 300,
    },
    height: "auto",
    backgroundColor: "#e8f5e9",
    position: "relative",
  },
  gridItem: {
    display: "grid",
    placeItems: "center",
  },
  media: {
    width: 300,
    margin: "auto",
    [theme.breakpoints.only("sm")]: {
      width: 250,
    },
    [theme.breakpoints.only("xs")]: {
      width: "90%",
    },
    height: 250,
    objectFit: "contain",
  },
  cardContent: {
    padding: 10,
    [theme.breakpoints.only("sm")]: {
      padding: 7,
      width: 250,
    },
    [theme.breakpoints.only("xs")]: {
      padding: 7,
      width: "90%",
    },
    textAlign: "center",
  },
  button: {
    textTransform: "capitalize",
  },
}));

const Cards = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [bookId, setBookId] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setBookId(event.currentTarget.id);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <>
      <CssBaseline />
      <Box m={3}>
        <Grid container spacing={3} justifyContent="center">
          {bookData.map((book) => {
            return (
              <Grid
                key={book.id}
                item
                xs={12}
                sm={5}
                md={4}
                lg={3}
                className={classes.gridItem}
              >
                <Card
                  className={classes.card}
                  variant="outlined"
                  onClick={handleClick}
                  id={book.id}
                >
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      component="img"
                      image={book.thumbnail}
                    />

                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom color="primary" variant="h6">
                        {book.title.substring(0, 25)}
                      </Typography>
                      <Typography variant="body2" color="primary">
                        Author: {book.Author}
                      </Typography>
                      <Typography variant="body2" color="primary">
                        posted by : {book.by}
                      </Typography>
                      <Typography variant="body2" color="primary">
                        posted from : {book.location}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <PopUp
                  open={open}
                  handleClick={handleClick}
                  handleClose={handleClose}
                  anchorEl={anchorEl}
                  bookId={bookId}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Cards;
