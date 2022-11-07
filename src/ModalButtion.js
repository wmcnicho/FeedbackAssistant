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
            feedback_body: "",
            feedback_abstract: "",
            title: "",
            feedback: this.props.feedback
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleFeedbackAbstractChange(event, newFeedbackAbstract) {
        console.log("New feedback: ", newFeedbackAbstract)
        let newState = this.state;
        newState.feedback_abstract = newFeedbackAbstract;
        this.setState(newState)
    }

    handleFeedbackBodyChange(event, newFeedbackBody) {
        console.log("New feedback: ", newFeedbackBody)
        let newState = this.state;
        newState.feedback_body = newFeedbackBody;
        this.setState(newState)
    }

    handleTitleChange(event, newTitle) {
        console.log("New title: ", newTitle)
        let newState = this.state;
        newState.title = newTitle;
        this.setState(newState)
    }

    handleSubmit() {
        console.log("Submit")
        let newState = this.state;
        const feedback = [{"title": this.state.title}, {"score": this.state.score}, {"feedback_abstract": this.state.feedback_abstract}, {"feedback_body": this.state.feedback_body}]
        console.log(feedback)
        newState.open = false;
        newState.feedback = feedback
        this.props.feedbackHandler(newState.feedback)
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
                            id="standard-basic" 
                            label="Abstract" variant="standard" 
                            value={this.state.feedback_abstract}
                            onChange={(event) => this.handleFeedbackAbstractChange(event, event.target.value)}
                        />
                        <TextField
                            id="standard-multiline-static"
                            label="Feedback"
                            multiline
                            maxRows={4}
                            value={this.state.feedback_body}
                            onChange={(event) => this.handleFeedbackBodyChange(event, event.target.value)}
                            variant="standard"
                        />
                        <Button onClick={this.handleSubmit} variant="contained">Submit</Button>
                        </Stack>
                    </Box>
                </Modal>
        </div>
        )
    }
}

export default ModalButtion
