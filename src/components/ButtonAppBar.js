import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link,NavLink } from 'react-router-dom';
import './buttonappbar.css'
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Pages Asignment
          </Typography>
          <NavLink  to="/"className="navlink"><Button sx={{color:"white"}} >Home</Button></NavLink>
          <NavLink to="/About"className="navlink"><Button sx={{color:"white"}} >About</Button></NavLink>
          <NavLink to="/Contact" className="navlink"><Button sx={{color:"white"}} >Contact</Button></NavLink>
          <NavLink to="/Services" className="navlink"><Button sx={{color:"white"}} >Services</Button></NavLink>
          <NavLink to="/Product" className="navlink"><Button sx={{color:"white"}} >Products</Button></NavLink>


          
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
