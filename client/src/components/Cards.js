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
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "../actions/bookAction";
const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(3),
    width: 300,
    position: "relative",
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

const Cards = ({ books, loading, error, userInfo, setCounter, counter }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <CssBaseline />
      <Box m={3}>
        {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
        {loading && <loading />}
        <Grid container spacing={3} justifyContent="center">
          {books?.map((book) => {
            const bookId = book._id;
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
                <Card className={classes.card} variant="outlined" id={book.id}>
                  {userInfo ? (
                    <button
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 hover:outline-black w-5 h-5"
                      onClick={() => {
                        window.confirm(
                          "Are you sure you want to delete this book?"
                        );
                        dispatch(deleteBook(bookId));
                        setCounter(counter + 1);
                      }}
                    >
                      X
                    </button>
                  ) : null}
                  <Link to={`/books/${bookId}`}>
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
                  </Link>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Cards;
