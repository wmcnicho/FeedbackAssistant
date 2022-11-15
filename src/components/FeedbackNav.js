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
        this.state = {
          showModal: false,
          showAssignmentModal: false,
          gitClassroomInfo: {"Classroom" : "", "Assignment": "", "ApiKey": ""},
          feedbacks: this.props.feedbacks,
          selected: this.props.selected
        }
        this.handleFeedbackModal = this.handleFeedbackModal.bind(this);
        this.handleFeedbackUpdate = this.handleFeedbackUpdate.bind(this);
        this.handleAssignmentModal = this.handleAssignmentModal.bind(this);
        this.handleAssignmentUpdate = this.handleAssignmentUpdate.bind(this);
        this.handleChooseDirectory = this.handleChooseDirectory.bind(this);
    }

    handleListItemClick(event, index) {
      let newState = this.state
      newState.selected = index;
      this.setState(newState);
      this.props.handler(index);      
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

    handleFeedbackUpdate(feedbacks, showModal) {
      let newState = this.state;
      newState.feedbacks = feedbacks;
      newState.showModal = showModal;
      console.log(newState.feedbacks)
      this.setState(newState)
      this.props.feedbackHandler(newState.feedbacks); 
    }

    handleAssignmentUpdate(gitClassroomInfo, showAssignmentModal) {
      let newState = this.state;
      newState.gitClassroomInfo = gitClassroomInfo;
      newState.showAssignmentModal = showAssignmentModal;
      console.log(newState.gitClassroomInfo)
      this.setState(newState)
      this.props.classroomHandler(newState.gitClassroomInfo)
    }

    async handleChooseDirectory(path, students) {
      const result = await window.backend.chooseDirectory();
      console.log(result);
      if (result !== undefined) {
        const { path, students } = result;
        this.props.chooseDirectoryHandler(path, students);
      }
    }
    
    render() {
            return (
              <>
              {this.state.showModal? 
              <FeedbackModal 
                feedback={this.state.feedbacks}
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
                        {this.state.feedbacks.map((fb, index) => (
                            <FeedbackNavItem
                              key={index}
                              id={fb.title}
                              selected={fb === this.state.selected}
                              onClick={(event) => this.handleListItemClick(event, index)}
                              title={fb.title}/>
                          ))}
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
                      <Tooltip title="Select Grading Directoy" onClick={this.handleChooseDirectory}>
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