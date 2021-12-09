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
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listBooks, listUserBooks } from "../actions/bookAction";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
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
    height: 400,
    backgroundColor: "whitesmoke",
    position: "relative",
    borderRadius: "15px",
  },
  gridItem: {
    display: "grid",
    placeItems: "center",
  },
  media: {
    width: "85%",
    margin: "0 auto",
    [theme.breakpoints.only("sm")]: {
      width: 250,
    },
    [theme.breakpoints.only("xs")]: {
      width: "90%",
    },
    height: 250,
    objectFit: "fill",
    borderRadius: "15px",
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

  const dispatch = useDispatch();
  const history = useHistory();
  const bookList = useSelector((state) => state.bookList);
  const { loading, error, books } = bookList;
  console.log(`books`, books);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(`userInfo`, userInfo)
  useEffect(() => {
    dispatch(listUserBooks());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, userInfo, history]);

  console.log(`books`, books);

  return (
    <>
      <CssBaseline />
      <Box m={3}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {loading && <loading />}
        <Grid container spacing={3} justifyContent="center">
          {books?.map((book) => {
            const bookId = book._id;
            console.log(`bookId`, bookId);
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
                <Link to={`/books/${bookId}`}>
                  <Card
                    className={classes.card}
                    variant="outlined"
                    id={book.id}
                  >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        component="img"
                        image={book.pic}
                      />

                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom color="primary" variant="h6">
                          {book.title.substring(0, 25)}
                        </Typography>
                        <Typography variant="body2" color="primary">
                          Author: {book.author}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Cards;
