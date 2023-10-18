import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MainPage from './components/main_page';
import 'typeface-roboto';

// import './styles/App.css';


const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h3: {
      fontSize: "2rem",
    },
    subtitle1: {
      fontSize: "1.2rem",
    },
    body1: {
      fontSize: "1.2rem",
    },
  },
  palette: {
    text: {
      primary: "#ffffff",
    },
    background: {
      default: "#000000",
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/main_team" element={<Team />} />
        <Route path="/lightspeed_journey" element={<LightspeedJourney />} />
        <Route path="/lightspeed_academy" element={<LightspeedAcademy />} /> */}
      </Routes>
    </Router>
  </ThemeProvider>
);
}

export default App;
