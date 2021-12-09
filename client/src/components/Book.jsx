import { Card, CardMedia, Grid, Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

// get the book by the id

const Book = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();
  console.log(`bookDetails`, id);

  useEffect(() => {
    const getBook = async () => {
      const { data } = await axios.get(`/books/${id}`);
      setBook(data);
    };
    getBook();
  }, [id]);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <Paper>
            <img src={book.pic} alt="Book picture" />
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="h3"> {book.title} </Typography>
          <Typography variant="h4">{book.author} </Typography>
          <Typography variant="h5">{book.from} </Typography>
          <Typography variant="h5">{book.by} </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Book;
