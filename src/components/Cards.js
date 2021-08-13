import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import bookImage from "../images/Book Lover_Monochromatic.svg";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
  },
  gridItem: {
    display: "grid",
    placeItems: "center",
  },
  media: {
    height: "auto",
  },
}));

const Cards = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Box m={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} className={classes.gridItem} sm={5} md={4} lg={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={bookImage}
                  title="book"
                />
                <CardContent>
                  {/* title */}
                  <Typography gutterBottom variant="h5">
                    Book
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Books are real treasure
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} className={classes.gridItem} sm={5} md={4} lg={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={bookImage}
                  title="book"
                />
                <CardContent>
                  {/* title */}
                  <Typography gutterBottom variant="h5">
                    Book
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Books are real treasure
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} className={classes.gridItem} sm={5} md={4} lg={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={bookImage}
                  title="book"
                />
                <CardContent>
                  {/* title */}
                  <Typography gutterBottom variant="h5">
                    Book
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Books are real treasure
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} className={classes.gridItem} sm={5} md={4} lg={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={bookImage}
                  title="book"
                />
                <CardContent>
                  {/* title */}
                  <Typography gutterBottom variant="h5">
                    Book
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Books are real treasure
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} className={classes.gridItem} sm={5} md={4} lg={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={bookImage}
                  title="book"
                />
                <CardContent>
                  {/* title */}
                  <Typography gutterBottom variant="h5">
                    Book
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Books are real treasure
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} className={classes.gridItem} sm={5} md={4} lg={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={bookImage}
                  title="book"
                />
                <CardContent>
                  {/* title */}
                  <Typography gutterBottom variant="h5">
                    Book
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Books are real treasure
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} className={classes.gridItem} sm={5} md={4} lg={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={bookImage}
                  title="book"
                />
                <CardContent>
                  {/* title */}
                  <Typography gutterBottom variant="h5">
                    Book
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Books are real treasure
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} className={classes.gridItem} sm={5} md={4} lg={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={bookImage}
                  title="book"
                />
                <CardContent>
                  {/* title */}
                  <Typography gutterBottom variant="h5">
                    Book
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Books are real treasure
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} className={classes.gridItem} sm={5} md={4} lg={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={bookImage}
                  title="book"
                />
                <CardContent>
                  {/* title */}
                  <Typography gutterBottom variant="h5">
                    Book
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Books are real treasure
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} className={classes.gridItem} sm={5} md={4} lg={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={bookImage}
                  title="book"
                />
                <CardContent>
                  {/* title */}
                  <Typography gutterBottom variant="h5">
                    Book
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Books are real treasure
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} className={classes.gridItem} sm={5} md={4} lg={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={bookImage}
                  title="book"
                />
                <CardContent>
                  {/* title */}
                  <Typography gutterBottom variant="h5">
                    Book
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Books are real treasure
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} className={classes.gridItem} sm={5} md={4} lg={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={bookImage}
                  title="book"
                />
                <CardContent>
                  {/* title */}
                  <Typography gutterBottom variant="h5">
                    Book
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Books are real treasure
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} className={classes.gridItem} sm={5} md={4} lg={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={bookImage}
                  title="book"
                />
                <CardContent>
                  {/* title */}
                  <Typography gutterBottom variant="h5">
                    Book
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Books are real treasure
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} className={classes.gridItem} sm={5} md={4} lg={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={bookImage}
                  title="book"
                />
                <CardContent>
                  {/* title */}
                  <Typography gutterBottom variant="h5">
                    Book
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Books are real treasure
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} className={classes.gridItem} sm={5} md={4} lg={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={bookImage}
                  title="book"
                />
                <CardContent>
                  {/* title */}
                  <Typography gutterBottom variant="h5">
                    Book
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Books are real treasure
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} className={classes.gridItem} sm={5} md={4} lg={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={bookImage}
                  title="book"
                />
                <CardContent>
                  {/* title */}
                  <Typography gutterBottom variant="h5">
                    Book
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Books are real treasure
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Cards;
