import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Divider,
  Drawer,
} from "@mui/material";
import Logo from './../images/logo.svg'
import MenuIcon from "@mui/icons-material/Menu";
import {  NavLink } from "react-router-dom";
import "./../styles/HeaderStyle.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  //handle menu click
  const handleDrawerToogle = () => {
    setMobileOpen(!mobileOpen);
  };

  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToogle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component={"div"}
        sx={{ flexGrow: 1,my:2 }}
      >
      <img src={Logo} alt="logo" height={'70'} width="200"/>
      </Typography>
      <Divider />
      
        <ul className="mobile-navigation">
          <li>
            <NavLink activeClassName="active" to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink  to={"/menu"}>Menu</NavLink>
          </li>
          <li>
            <NavLink to={"/About"}>About</NavLink>
          </li>
          <li>
            <NavLink  to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                // display: { sm: "none" }
              }}
              onClick={handleDrawerToogle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1 }}
            >
<img src={Logo} alt="logo" height={'70'} width="250"/>
            </Typography>
            
            <ul className="navigation-menu">
              <li>
                <NavLink activeClassName="active" to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to={"/menu"}>Menu</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to={"/About"}>About</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToogle}
            sx={{
              display: { xs : "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px" },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box >
        <Toolbar/>
        </Box>
      </Box>
    </>
  );
};

export default Header;
