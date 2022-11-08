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
import FeedbackModal from './FeedbackModal';
import AssignmentModal from './AssignmentModal'

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
        this.state = {
          showModal: false,
          showAssignmentModal: false,
          gitClassroomInfo: {"Classroom" : "", "Assignment": ""},
          feedback: []
        }
        this.handleFeedbackModal = this.handleFeedbackModal.bind(this);
        this.handleFeedbackUpdate = this.handleFeedbackUpdate.bind(this)
        this.handleAssignmentModal = this.handleAssignmentModal.bind(this)
        this.handleAssignmentUpdate = this.handleAssignmentUpdate.bind(this)
    }
    handleFeedbackModal() {
      let newState = this.state
      newState.showModal = true
      this.setState(newState)
    }

    handleAssignmentModal() {
      let newState = this.state
      newState.showAssignmentModal = true
      this.setState(newState)
    }

    handleFeedbackUpdate(feedback, showModal) {
      let newState = this.state;
      newState.feedback = feedback;
      newState.showModal = showModal;
      // console.log("SHOW MODAL?: ", showModal)
      console.log(newState.feedback)
      this.setState(newState)
    }

    handleAssignmentUpdate(gitClassroomInfo, showAssignmentModal) {
      let newState = this.state;
      newState.gitClassroomInfo = gitClassroomInfo;
      newState.showAssignmentModal = showAssignmentModal;
      console.log(newState.gitClassroomInfo)
      this.setState(newState)      
    }
    
    render() {
            return (
              <>
              {this.state.showModal? 
              <FeedbackModal 
                feedback={this.state.feedback}
                showModal={this.state.showModal}
                feedbackHandler={this.handleFeedbackUpdate}              
              /> : null}
              {this.state.showAssignmentModal? 

              <AssignmentModal 
              gitClassroomInfo={this.state.gitClassroomInfo}
                showAssignmentModal={this.state.showAssignmentModal}
                assignmentHandler={this.handleAssignmentUpdate}              
              /> : null}

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
                        <IconButton color="inherit" onClick={this.handleAssignmentModal}>
                          <GitHubIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Add More Feedback" placement='top'>
                        <StyledFab color="secondary" aria-label="add" onClick={this.handleFeedbackModal}>
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
              </>

        )
    }
}
export default FeedbackNav