import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { database } from './../firebase/config';
import { useNavigate } from "react-router-dom";
import useAuthStatus from './useAuthStatus';



function MyNavbar() {

  const user = useAuthStatus();
  const history = useNavigate()

  const handleClick = () =>{
      signOut(database).then(val=>{
          console.log(val,"val")
          history('/register')
      })
  }
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
             <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {user ? (
              <>
                <MenuItem>
      <Link to="/" className='nav-link'>Home</Link>
      </MenuItem>
                <MenuItem>
      <Link to="/post" className='nav-link'>Posts</Link>
      </MenuItem>
              </>)
              :(<>
                            <MenuItem>
      <Link to="/login" className='nav-link'>Login</Link>
      </MenuItem>
      <MenuItem>
      <Link to="/register" className='nav-link'>Register</Link>
      </MenuItem>
              </>
              )}
                  

            </Menu> 
      
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

          {user ? (
              <>
                <MenuItem>
      <Link to="/" className='nav-link'>Home</Link>
      </MenuItem>
      <MenuItem>
      <Link to="/post" className='nav-link'>Posts</Link>
      </MenuItem>
              </>)
              :(<>
                            <MenuItem>
      <Link to="/login" className='nav-link'>Login</Link>
      </MenuItem>
      <MenuItem>
      <Link to="/register" className='nav-link'>Register</Link>
      </MenuItem>
              </>
              )}
                  
      
          </Box>


            

{user ? (  <>
                <Box sx={{ flexGrow: 0 }}>
                <MenuItem>
      <Link to="/logout" className='nav-link' onClick={handleClick}>Logout</Link>
      </MenuItem>
          </Box>
              </>)
              :(<>

              </>
              )}
                  

          </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MyNavbar;