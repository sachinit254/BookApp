import React from "react";
import {
  Box,
  CssBaseline,
  TextField,
  makeStyles,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      borderRadius: 10,
      padding: 10,
      display: "flex",
      justifyContent: "center",
    },
    textfield: {
      marginRight: "10px",
      width: "50%",
      "& label": {
        color: "black",
      },
      "& Input": {
        color: "black",
      },
      "& label.Mui-focused": {
        color: "black",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "black",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "black",
        },
        "&:hover fieldset": {
          borderColor: "black",
        },
        "&.Mui-focused fieldset": {
          borderColor: "black",
        },
      },
    },
    button : {
       textTransform : "capitalize",
       fontSize: '20px',
    },
  };
});
const SearchBar = () => {
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
        />
        <Button className={classes.button} variant="contained" color="primary">Search</Button>
      </Box>
    </>
  );
};

export default SearchBar;
