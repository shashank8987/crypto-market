import { makeStyles } from "@material-ui/core";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    selectbutton: {
      border: "1px solid rgba(231, 59, 59, 0.92)",
      borderRadius: 5,
      margin: 4,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor: selected ? "rgba(231, 59, 59, 0.92)" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "rgba(231, 59, 59, 0.92)",
      },
      width: "22%",
      //   margin: 5,
    },
  });

  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;
