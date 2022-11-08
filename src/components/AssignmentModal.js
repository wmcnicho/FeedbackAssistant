import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
class AssignmentModal extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            showAssignmentModal: this.props.showAssignmentModal,
            gitClassroomInfo: this.props.gitClassroomInfo,
            classRoomName: "",
            assignmentName: ""
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleClassRoomChange(event, newClassRoom) {
        let newState = this.state;
        newState.classRoomName = newClassRoom;
        this.setState(newState)
    }

    handleAssignmentChange(event, newAssignment) {
        let newState = this.state;
        newState.assignmentName = newAssignment;
        this.setState(newState)
    }

    handleSubmit() {
        let newState = this.state;
        newState.showAssignmentModal = false;
        newState.gitClassroomInfo["Classroom"] = this.state.classRoomName
        newState.gitClassroomInfo["Assignment"] = this.state.assignmentName
        this.props.assignmentHandler(newState.gitClassroomInfo, newState.showAssignmentModal)
    }

    handleOpen() {
        let newState = this.state;
        newState.showAssignmentModal = true;
        this.setState(newState)
    }
    handleClose() {
        let newState = this.state;
        newState.showAssignmentModal = false;
        this.setState(newState)
        this.props.feedbackHandler(newState.feedback, newState.showAssignmentModal)
    }

    render() {
        return (
            <div>
                <Modal
                    open={this.state.showAssignmentModal}
                    onClose={this.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                <Stack spacing={2}>
                    <TextField 
                        id="standard-basic" 
                        label="Classroom" variant="standard" 
                        value={this.state.classRoomName}
                        onChange={(event) => this.handleClassRoomChange(event, event.target.value)}
                    />
                     <TextField 
                        id="standard-basic" 
                        label="Assignment" variant="standard" 
                        value={this.state.assignmentName}
                        onChange={(event) => this.handleAssignmentChange(event, event.target.value)}
                    />                 
                        <Button onClick={this.handleSubmit} variant="contained">Submit</Button>
                        </Stack>
                    </Box>
                </Modal>
        </div>
        )
    }
}

export default AssignmentModal