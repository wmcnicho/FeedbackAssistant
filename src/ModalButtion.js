import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';

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
  
class ModalButtion extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            open: false,
            score: 0,
            feedback: "",
            title: ""
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleScoreChange(event, newScore) {
        if (newScore > 100){
            newScore = 100;
        } 
        if (newScore < 0) {
            newScore = 0;  
        }
        let newState = this.state;
        newState.score = newScore;
        console.log("New score: ", newScore)
        this.setState(newState)
    }

    handleFeedbackChange(event, newFeedback) {
        console.log("New feedback: ", newFeedback)
        let newState = this.state;
        newState.feedback = newFeedback;
        this.setState(newState)
    }

    handleTitleChange(event, newTitle) {
        console.log("New title: ", newTitle)
        let newState = this.state;
        newState.title = newTitle;
        this.setState(newState)
    }


    handleOpen() {
        this.setState({open: true})
    }
    handleClose() {
        this.setState({open: false})
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleOpen}>Open modal</Button>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                <Stack spacing={2}>
                    <TextField 
                        id="standard-basic" 
                        label="Title" variant="standard" 
                        value={this.state.title}
                        onChange={(event) => this.handleTitleChange(event, event.target.value)}
                    />
                    <Box sx={{display:"flex", justifyContent:"space-around"}}>
                        <Box>
                            <Typography variant='h7' display="inline"> Points Deducted</Typography>
                            <Input
                                    px={3}
                                    sx={{
                                        '& input' : {
                                            textAlign:"right !important",
                                            }
                                        }}
                                        
                                    value={this.state.score}
                                    size="small"
                                    onChange={(event) => this.handleScoreChange(event, event.target.value)}
                                    inputProps={{
                                        step: 1,
                                        min: 0,
                                        max: 100,
                                        type:'number',
                                        sx:{textAlign:"right"}
                                    }}
                                />
                            </Box>
                        </Box>

                        <TextField
                            id="standard-multiline-static"
                            label="Feedback"
                            multiline
                            maxRows={4}
                            value={this.state.feedback}
                            onChange={(event) => this.handleFeedbackChange(event, event.target.value)}
                            variant="standard"
                        />
                        <Button variant="contained">Submit</Button>
                        </Stack>
                    </Box>
                </Modal>
        </div>
        )
    }
}

export default ModalButtion
