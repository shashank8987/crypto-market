import {
    AppBar,
    Container,
    MenuItem,
    Select,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import {
    createTheme,
    makeStyles,
    ThemeProvider,
  } from "@material-ui/core/styles";
  import { useHistory } from "react-router-dom";
  import { CryptoState } from "../CryptoContext";
  
  const useStyles = makeStyles((theme) => ({
    
    title: {
      flex: 1,
      color: "rgba(231, 59, 59, 0.92)",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
  }));
  
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  
  function Header() {
    const classes = useStyles();
    const { currency, setCurrency } = CryptoState();
  
    const history = useHistory();
  
    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography
                onClick={() => history.push(`/`)}
                variant="h6"
                className={classes.title}
              >
                Crypto <span style={{color:"white"}}>Market</span>
              </Typography>
              {/* <Button color="inherit">Login</Button> */}
              <button
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{ width: 100, height: 40, marginLeft: 15, backgroundColor: "black", border: "0.2px solid grey", borderRadius: "6%", color: "whitesmoke", fontWeight: "bold", fontSize:"14.5px", cursor:"pointer" }}
                onClick={()=>history.push("/news")}
              >
                NEWS
              </button>
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                style={{ width: 100, height: 40, marginLeft: 15 }}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    );
  }
  
  export default Header;
  