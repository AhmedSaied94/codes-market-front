import React from 'react'
import { AppBar, Toolbar,IconButton, Typography, Button, Badge } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box } from '@mui/system';


function NavBar() {
  return (
    <AppBar position='static' elevation={0} sx={{backgroundColor:'gray'}}>
      <Toolbar>
      <Box component='div' 
      sx={{
        display:'flex',
         justifyContent:'space-between',
         width:'100%'
        }}>
      {/*Logo*/}
        <Box>
          <IconButton>
            <MenuOutlinedIcon />
          </IconButton>
        </Box>
        <Box sx={{display:'flex',}}>
        {/*links */}
        <Typography sx={{
          marginRight:'20px',
          cursor:'pointer',
          color:'#161616'

        }}>App&Game Templates</Typography>
        <Typography sx={{
          marginRight:'20px',
          cursor:'pointer',
          color:'#161616'

        }}>Scripts&Code</Typography>
        <Badge badgeContent={'SELL!'} >
        <Typography sx={{
          marginRight:'20px',
          cursor:'pointer',
          color:'#161616'

        }}>Uplode Your Code</Typography>
        </Badge>
        </Box>
        <Box>
        {/**Button */}
        <Button variant='contained'>Login</Button>
        </Box>
      </Box>        
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
