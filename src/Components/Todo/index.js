import { useState } from "react";
import { Button, List, ListItem, ListItemText, Modal } from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons/";
import db from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <h1>I am a modal</h1>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={updateTodo}>Update Todo</Button>
        </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemText
            primary={props.todo.todo}
            secondary="Dummy deadline ⏰"
          />
        </ListItem>
        <button onClick={handleOpen}>Edit</button>
        <DeleteForever
          onClick={(e) => db.collection("todos").doc(props.todo.id).delete()}
        />
      </List>
    </>
  );
}
