import React from "react";
import { Box, CssBaseline, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginTop: theme.spacing(6),
      borderRadius: 10,
      padding: 10,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 50,
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
      },
    },
    textfield: {
      marginRight: "10px",
      width: "70%",
      marginBottom: "10px",
      [theme.breakpoints.up("sm")]: {
        width: "60%",
        marginRight: "10px",
        marginBottom: 0,
      },
      "& label": {
        color: theme.palette.primary.main,
      },
      "& Input": {
        color: theme.palette.primary.main,
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: theme.palette.primary.main,
        },
        "&:hover fieldset": {
          borderColor: theme.palette.primary.main,
        },
        "&.Mui-focused fieldset": {
          borderColor: theme.palette.primary.main,
        },
      },
    },
    button: {
      textTransform: "capitalize",
      fontSize: "1.2rem",
      height: "55px",
      [theme.breakpoints.only("xs")]: {
        width: "25%",
      },
    },
    uploadBtn: {
      fontSize: "1.2rem",
      textTransform: "none",
      height: "55px",
      position: "relative",
      left: "6rem",
    },
  };
});
const SearchBar = ({ setShow }) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Box className={classes.root}>
        <TextField
          className={classes.textfield}
          id="outlined-search"
          label="Search.."
          type="search"
          variant="outlined"
          color="primary"
        />
        <Button className={classes.button} variant="outlined">
          Search
        </Button>
        <Button
          className={classes.uploadBtn}
          variant="outlined"
          onClick={() => setShow(true)}
        >
          Upload
        </Button>
      </Box>
    </>
  );
};

export default SearchBar;
