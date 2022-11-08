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
  
class FeedbackModal extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            showModal: this.props.showModal,
            title: "",
            type: "",
            // score: 0,
            short_desc: "",
            long_desc: "",
            feedback: this.props.feedback
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleScoreChange(event, newScore) {
    //     if (newScore > 100){
    //         newScore = 100;
    //     } 
    //     if (newScore < 0) {
    //         newScore = 0;  
    //     }
    //     let newState = this.state;
    //     newState.score = newScore;
    //     this.setState(newState)
    // }

    handleTypeChange(event, newType) {
        let newState = this.state;
        newState.type = newType;
        this.setState(newState)
    }

    handleShortDescChange(event, newShortDesc) {
        let newState = this.state;
        newState.short_desc = newShortDesc;
        this.setState(newState)
    }

    handleLongDescChange(event, newLongDesc) {
        let newState = this.state;
        newState.long_desc = newLongDesc;
        this.setState(newState)
    }

    handleTitleChange(event, newTitle) {
        let newState = this.state;
        newState.title = newTitle;
        this.setState(newState)
    }

    handleSubmit() {
        let newState = this.state;
        const feedback = [{"title": this.state.title, "type": this.state.type, "short_desc": this.state.short_desc, "long_desc": this.state.long_desc}]
        // console.log(feedback)
        newState.showModal = false;
        // newState.feedback = feedback
        newState.feedback = [...this.state.feedback, feedback]
        this.props.feedbackHandler(newState.feedback, newState.showModal)
    }
    handleOpen() {
        // this.setState({showModal: true})
        let newState = this.state;
        newState.showModal = true;
        this.setState(newState)
    }
    handleClose() {
        // this.setState({showModal: false})
        let newState = this.state;
        newState.showModal = false;
        this.setState(newState)
        this.props.feedbackHandler(newState.feedback, newState.showModal)
    }

    render() {
        return (
            <div>
                <Modal
                    open={this.state.showModal}
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
                    {/* <Box sx={{display:"flex", justifyContent:"space-around"}}>
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
                        </Box> */}

                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.type}
                                label="Type"
                                onChange={(event) => this.handleTypeChange(event, event.target.value)}
                            >
                                <MenuItem value={"Missing"}>Missing</MenuItem>
                                <MenuItem value={"Major"}>Major</MenuItem>
                                <MenuItem value={"Minor"}>Minor</MenuItem>
                                <MenuItem value={"Style Good"}>Style Good</MenuItem>
                                <MenuItem value={"Style Correction"}>Style Correction</MenuItem>
                                <MenuItem value={"Info"}>Info</MenuItem>
                                <MenuItem value={"Positive"}>Positive</MenuItem>
                            </Select>
                        </FormControl>                        
                        <TextField 
                            id="standard-basic" 
                            label="Short description" variant="standard" 
                            value={this.state.short_desc}
                            onChange={(event) => this.handleShortDescChange(event, event.target.value)}
                        />
                        <TextField
                            id="standard-multiline-static"
                            label="Long description"
                            multiline
                            maxRows={4}
                            value={this.state.long_desc}
                            onChange={(event) => this.handleLongDescChange(event, event.target.value)}
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

export default FeedbackModal