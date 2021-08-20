import {
  Box,
  Button,
  makeStyles,
  Popover,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { bookData } from "../mockData";
const useStyles = makeStyles((theme) => ({
  box: {
    width: 280,
    height: 320,
    paddingTop: 0,
    padding: theme.spacing(2),
  },
}));

const PopUp = ({ open, handleClick, handleClose, anchorEl, title, bookId }) => {
  const classes = useStyles();
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <Box className={classes.box}>
          {bookData
            .filter((book) => bookId === String(book.id))
            .map((filteredBook) => (
              <div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Button style={{ marginLeft: "auto" }} onClick={handleClose}>
                    <Close />
                  </Button>
                </div>
                <Typography variant="h6" className={classes.typography}>
                  Title: {filteredBook.title}
                </Typography>
                <Typography variant="body1" className={classes.typography}>
                  Author: {filteredBook.Author}
                </Typography>
                <Typography variant="body1" className={classes.typography}>
                  Posted by: {filteredBook.by}
                </Typography>
                <Typography variant="body1" className={classes.typography}>
                  Posted from: {filteredBook.location}
                </Typography>
              </div>
            ))}
        </Box>
      </Popover>
    </div>
  );
};

export default PopUp;
