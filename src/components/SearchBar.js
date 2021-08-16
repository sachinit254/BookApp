import React from "react";
import {
  Box,
  CssBaseline,
  TextField,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => {
  return {
    root: {
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
      fontSize: "20px",
      [theme.breakpoints.only("xs")]: {
        width: "25%",
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
          color="primary"
        />
        <Button className={classes.button} variant="contained" color="primary">
          <lord-icon
            src="https://cdn.lordicon.com/msoeawqm.json"
            trigger="click"
            colors="primary:#ffffff,secondary:#ffffff"
            stroke="100"
            scale="65"
            style={{ width: "40px", height: "40px" }}
          ></lord-icon>
        </Button>
      </Box>
    </>
  );
};

export default SearchBar;
