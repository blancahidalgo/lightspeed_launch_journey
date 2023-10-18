import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Header from "./header";
import LSDanceImage from "../assets/ls-dance.png";

function MainPage() {
  return (
    <Box
      sx={{
        bgcolor: "black",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Typography
        variant="h4"
        gutterBottoms
        sx={{
          textAlign: "center",
          color: "white",
          marginTop: "4rem",
        }}
      >
        Your Lightspeed Journey Starts... Now!{" "}
        <RocketLaunchIcon sx={{ color: "Red", ml: 1, fontSize: "35px" }} />
      </Typography>
      <Box
        sx={{
          position: "relative",
          flex: "1 0 auto",
          bgcolor: "black",
          borderRadius: "8px",
          // minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <img
          src={LSDanceImage}
          alt="LS Dance"
          style={{ maxWidth: "1000px", marginBottom: "2rem" }}
        />
      <Box
        id="meetTheTeam" // Add this ID for the section
        sx={{
          position: "relative",
          flex: "1 0 auto",
          bgcolor: "black",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
      </Box>
      


       




      </Box>
    </Box>
  );
}

export default MainPage;
