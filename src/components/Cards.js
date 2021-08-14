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
import React from "react";
import { data } from "../../src/mockData";
const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(3),
    maxWidth: 300,
    height: "auto",
    backgroundColor: "#e8f5e9",
  },
  gridItem: {
    display: "grid",
    placeItems: "center",
  },
  media: {
    width: 300,
    height: 250,
    objectFit: "contain",
  },
  cardContent: {
    padding: 10,
    textAlign: "center",
  },
}));

const Cards = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Box m={3}>
        <Grid container spacing={3} justifyContent="center">
          {data.map(({ id, title, Author, thumbnail, by, from }) => {
            return (
              <Grid
                key={id}
                item
                xs={12}
                sm={5}
                md={4}
                lg={3}
                className={classes.gridItem}
              >
                <Card className={classes.card} variant="outlined">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      component="img"
                      image={thumbnail}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h6">
                        {title.substring(0, 25)}
                      </Typography>
                      <Typography variant="body2" color="textPrimary">
                        Author: {Author}
                      </Typography>
                      <Typography variant="body2" color="textPrimary">
                        posted by : {by}
                      </Typography>
                      <Typography variant="body2" color="textPrimary">
                        posted from : {from}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
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
