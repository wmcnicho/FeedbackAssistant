import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

import GitHubIcon from '@mui/icons-material/GitHub';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

class FeedbackNav extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
            return (
                <Box display={{display:'flex', flexDirection:'column', height:"100vh"}}>
                  <Box sx={{flexGrow:1}}>
                    <nav aria-label="main mailbox folders">
                      <List>
                        <ListItem sx={{justifyContent:'center'}}>
                          <Box>
                            <Typography variant='h5' >Assignment 10</Typography>
                          </Box>
                        </ListItem>
                        <ListItem sx={{justifyContent:'center'}}>
                          <Box>
                            <Typography variant='h6' >Node.js Basics</Typography>
                          </Box>
                        </ListItem>
                      </List>
                    </nav>
                    <Divider />
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary="Feedback Item 1" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Feedback Item 2" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Box>
                  <AppBar position="relative" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                    <Toolbar>
                      <Tooltip title="Select GitHub Classroom">
                        <IconButton color="inherit">
                          <GitHubIcon />
                        </IconButton>
                      </Tooltip>
                      <StyledFab color="secondary" aria-label="add">
                        <AddIcon />
                      </StyledFab>
                      <Box sx={{ flexGrow: 1 }} />
                      <Tooltip title="Select Grading Directoy">
                        <IconButton color="inherit">
                          <FolderOpenIcon />
                        </IconButton>
                      </Tooltip>
                    </Toolbar>
                  </AppBar>
                </Box>
        )
    }
}
export default FeedbackNav