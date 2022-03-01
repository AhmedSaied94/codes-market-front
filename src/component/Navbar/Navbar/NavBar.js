import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Button, Badge ,Menu,MenuItem} from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box } from '@mui/system';


function NavBar() {
  const [ anchorEl, setAnchorEl ]= useState(null);
  const openMenu=Boolean(anchorEl)

  const handleClick=(e)=>{
    setAnchorEl(e.currentTarget)
    console.log(e.currentTarget)
  }
  const handleClose= () =>setAnchorEl(null)
  return (
    <AppBar position='static' elevation={1} sx={{ backgroundColor: 'yellow' }}>
      <Toolbar>
        <Box component='div'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}>
          {/*Logo*/}
          <Box>
          
              <MenuOutlinedIcon />
            
          </Box>
          <Box sx={{ display: 'flex', }}>
            {/*links */}
          
             {/* <Badge badgeContent={'(123)'} color='primary' anchorOrigin={{ vertical: 'top', horizontal: 'right', }} > */}
                <Typography sx={{
                  marginRight: '20px',
                  cursor: 'pointer',
                  color: '#161616'
                }}
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={openMenu?"true":undefined}
                onClick={(e)=>handleClick(e)}

                >App&Game Templates
                </Typography>
              {/*</Badge>*/}
              {/**Dropdown items */}
              <Menu id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}>
                <MenuItem onClick={handleClose}>ios</MenuItem>
                <MenuItem onClick={handleClose}>Android</MenuItem>
                <MenuItem onClick={handleClose}>Unity</MenuItem>
              </Menu>
            
          
          <Typography sx={{
            marginRight: '20px',
            cursor: 'pointer',
            color: '#161616',
            marginLeft:'20px'
          }}>Scripts&Code</Typography>
          
        
          <Badge badgeContent={'sell!'} color='primary' >
            <Typography sx={{
              marginRight: '20px',
              cursor: 'pointer',
              color: '#161616'

            }}>Uplode Your Code</Typography>
          </Badge>
          
        </Box>
        <Box>
          {/**Button */}
          <Button variant='contained'>Login</Button>
        </Box>
      </Box>
    </Toolbar>
    </AppBar >
  )
}

export default NavBar
