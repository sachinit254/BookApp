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
      width: "80%",
      marginTop: 20,
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: 10,
      padding: 10,
      display: "flex",
      justifyContent: "center",
    },
    textfield: {
      width: "60%",
      "& label": {
        color: "black",
      },
      "& Input": {
        color: "black",
      },
      "& Input ::-webkit-search-cancel-button": {
        backgroundColor: "black",
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
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <Search style={{ color: "black" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
};

export default SearchBar;
