import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Logo from "../assets/ls-dark.png";
import { Link } from "react-router-dom";

export default function Header() {
  const handleLogoClick = () => {
    window.location.href = window.location.origin;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "black", border: "1px solid" }}
      >
        <Toolbar>
          <Box display="flex" justifyContent="flex-start">
            <img
              src={Logo}
              alt="Logo"
              style={{ height: "120px", cursor: "pointer" }}
              onClick={handleLogoClick}
            />
          </Box>

          <Box display="flex" justifyContent="center" flexGrow={1} mt={1}>
          <Button
              color="inherit"
              sx={{
                fontSize: "20px",
                padding: "10px 20px",
                marginRight: "15px",
              }}
              component={Link}
              to="/main_team"
            >
              Meet the Team
            </Button>
            {/* <Button
              color="inherit"
              sx={{
                fontSize: "20px",
                padding: "10px 20px",
                marginRight: "15px",
              }}
              component={Link}
              to="/meet_team"
            >
              Meet the Team
            </Button> */}
            <Button
              color="inherit"
              sx={{
                fontSize: "20px",
                padding: "10px 20px",
                marginRight: "15px",
              }}
              component={Link}
              to="/lightspeed_journey"
            >
              Lightspeed Journey
            </Button>
            <Button
              color="inherit"
              sx={{
                fontSize: "20px",
                padding: "10px 20px",
                marginRight: "15px",
              }}
              component={Link}
              to="/lightspeed_academy"
            >
              Lightspeed Academy
            </Button>
          </Box>
          <Button
            variant="outlined"
            sx={{
              fontSize: "16px", 
              padding: "15px 30px", 
              background: "black", 
              borderRadius: "20px",
              color: "white", 
              borderColor: "white",
              "&:hover": {
              borderColor: "red",
              background: "black", 
              },
            }}
            onClick={() => window.open("https://manager.lsk.lightspeed.app/", "_blank")}

          >
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

