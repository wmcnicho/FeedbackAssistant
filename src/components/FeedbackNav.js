import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import GitHubIcon from '@mui/icons-material/GitHub';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FeedbackNavItem from './FeedbackNavItem';

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
        this.feedback = this.props.feedback;
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
                         {Object.keys(this.feedback).map(fb => (
                          <FeedbackNavItem key={fb.title} title={this.feedback[fb].title}/>
                         ))}
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
                      <Tooltip title="Add More Feedback" placement='top'>
                        <StyledFab color="secondary" aria-label="add">
                          <AddIcon />
                        </StyledFab>
                      </Tooltip>
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