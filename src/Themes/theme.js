import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const Themes = ({ children }) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default Themes;
