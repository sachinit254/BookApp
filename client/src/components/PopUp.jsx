import { Box, Button, Popover, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Close from "@material-ui/icons/Close";
const useStyles = makeStyles((theme) => ({
  box: {
    width: 280,
    height: 320,
    paddingTop: 0,
    padding: theme.spacing(2),
  },
}));

const PopUp = ({ open, handleClick, handleClose, anchorEl, title, books }) => {
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
          {books.map((book) => (
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
                Title: {book.title}
              </Typography>
              <Typography variant="body1" className={classes.typography}>
                Author: {book.Author}
              </Typography>
              <Typography variant="body1" className={classes.typography}>
                Posted by: {book.by}
              </Typography>
              <Typography variant="body1" className={classes.typography}>
                Posted from: {book.location}
              </Typography>
            </div>
          ))}
        </Box>
      </Popover>
    </div>
  );
};

export default PopUp;
