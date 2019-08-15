import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function AddProducts(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [values, setValues] = React.useState(getEmptyProduct());
  const [open, setOpen] = React.useState(false);
  const [Snack, setSnack] = React.useState("");

  const state = { products: "" };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  function handleClick() {
    setOpen(true);
    setSnack(values.title);
    dispatch({ type: "NEW_PRODUCT", payload: values });
    setValues(getEmptyProduct());
  }

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }

  function getEmptyProduct() {
    return {
      title: "",
      description: "",
      price: ""
    };
  }

  return (
    <div>
      <Container maxWidth="lg">
        <h1 style={{ marginTop: "15px" }}>Add New Product</h1>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-title"
            label="Title"
            className={classes.textField}
            value={values.title}
            onChange={handleChange("title")}
            margin="normal"
          />
          <TextField
            id="standard-description"
            label="Description"
            className={classes.textField}
            value={values.description}
            onChange={handleChange("description")}
            margin="normal"
          />
          <TextField
            id="standard-price"
            label="Price"
            className={classes.textField}
            value={values.price}
            onChange={handleChange("price")}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleClick}
          >
            Add
          </Button>
        </form>
      </Container>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">New product created: {Snack}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </div>
  );
}
