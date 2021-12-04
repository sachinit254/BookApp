import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createBook } from "../actions/bookAction";
const useStyles = makeStyles((theme) => ({
  container: {
    margin: "4rem auto 4rem",
    width: "30vw",
    height: "70vh",
    position: "relative",
    backgroundColor: "whitesmoke",
  },
  Form: {
    position: "absolute",
    top: "2rem",
    left: "50%",
    transform: "translate(-50%)",
    width: "80%",
    padding: "0rem 1rem",
  },
  heading: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  textField: {
    marginBottom: "1rem",
  },
  inputSection: {
    height: "110px",
    marginBottom: "1rem",
  },
  input: {
    display: "none",
  },
  preview: {
    position: "relative",
    top: "-33px",
    left: "10rem",
    borderRadius: "10px",
    width: "100px",
    height: "100px",
  },
  removeBtn: {
    position: "relative",
    top: "-68px",
    right: "5.6rem",
    fontSize: "0.7rem",
  },
  submitBtn: {
    outline: "1px solid black",
  },
  closeBtn: {
    position: "relative",
    top: "10px",
    left: "20rem",
  },
}));
const BookForm = ({ show, setShow }) => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pic, setPic] = useState();
  const [from, setFrom] = useState("");
  const [by, setBy] = useState("");
  const ref = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const bookCreate = useSelector((state) => state.bookCreate);
  const { loading, error, book } = bookCreate;

  useEffect(() => {
    const res = localStorage.getItem("userInfo");
    const data = JSON.parse(res);
    setBy(data.firstname + " " + data.lastname);
    setFrom(data.city);
  }, []);

  console.log(`from`, from);
  console.log(`by`, by);

  const uploadPic = (pics) => {
    setPic(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "BookPic");
      data.append("cloud_name", "dbckqtgmv");
      fetch("https://api.cloudinary.com/v1_1/dbckqtgmv/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(`data`, data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return alert("Please Select an Image");
    }
  };

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setPic(e.target.files[0]);
    }
  };

  // This function will remove the selected image from the input
  const imageRemove = (e) => {
    e.preventDefault();
    ref.current.value = "";
    setPic();
  };

  const resetHandler = () => {
    setTitle("");
    setAuthor("");
    setPic("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    window.location.reload();
    if (!title || !author || !pic) {
      alert("Please fill all the required fields");
      return;
    }
    dispatch(createBook(title, author, pic, from, by));
    history.push("/");
  };

  console.log(`pic`, pic);

  if (!show) {
    return;
  }
  return (
    <Container className={classes.container}>
      <IconButton
        className={classes.closeBtn}
        onClick={() => setShow(false)}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
      <form className={classes.Form} onSubmit={submitHandler}>
        <Typography className={classes.heading} variant="h5">
          Upload Book
        </Typography>
        <TextField
          className={classes.textField}
          id="outlined-basic"
          label="Book Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          className={classes.textField}
          id="outlined-basic"
          label="Author Name"
          variant="outlined"
          fullWidth
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <div className={classes.inputSection}>
          <input
            ref={ref}
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            single
            type="file"
            onChange={(e) => uploadPic(e.target.files[0])}
          />
          <label className={classes.inputBtn} htmlFor="contained-button-file">
            <Button variant="contained" component="span">
              Upload Pic
            </Button>
          </label>
          {pic && (
            <div>
              <img
                className={classes.preview}
                src={pic}
                alt="Thumb"
                // onChange={(e) => imageChange(e)}
              />
              <Button
                className={classes.removeBtn}
                variant="contained"
                onClick={(e) => imageRemove(e)}
              >
                Remove Pic
              </Button>
            </div>
          )}
        </div>
        <Button
          type="submit"
          className={classes.submitBtn}
          onClick={(e) => submitHandler(e)}
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default BookForm;
