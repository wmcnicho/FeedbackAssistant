import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import FeedbackNav from './FeedbackNav'
import FeedbackInfoPanel from './FeedbackInfoPanel';
import StudentNavigation from './StudentNavigation';

const mockData = {
    "title": "Assignment 1",
    "feedback_items": [
        {
            "title": "Incorrect for-loop",
            "type": "major_bug",
            "short_desc": "For-loop is not exiting",
            "long_desc": "Your for-loop is looping forever because the exit conditions are not met"
        },
        {
            "title": "Good test",
            "type": "positive",
            "short_desc": "Very thorough tests!",
            "long_desc": "Your tests have a good code coverage and hit many edge cases. Keep it up!"
        },
        {
            "title": "Excellent",
            "type": "positive",
            "short_desc": "Excellent work!",
            "long_desc": "Everything is perfect!"
        }
    ],
    "students": {
        "github1": {
            "url": "https://www.github.com/classroom1/repo-for-github1",
            "selected_items": [
                1
            ]
        },
        "github2": {
            "url": "https://www.github.com/classroom1/repo-for-github2",
            "selected_items": [
                2
            ]
        },
        "github3": {
            "url": "https://www.github.com/classroom1/repo-for-github3",
            "selected_items": [
                1,
                2
            ]
        }
    }
}

class AppContainer extends React.Component {
    constructor(props) {
        super(props); 
        this.data = mockData;
        this.state = {
                currentStudentHandle: "github1",
                selectedFeedbackId: 0,
                feedbacks: this.data.feedback_items,
        }
        this.handleSelectedItemChange = this.handleSelectedItemChange.bind(this);
        this.handleFeedbackItem = this.handleFeedbackItem.bind(this);
    }

    handleSelectedItemChange(value) {
        let newState = this.state;
        newState["selectedFeedbackId"] = value;
        this.setState(newState);
    }

    handleFeedbackItem(value) {
        let newState = this.state;
        newState.feedbacks = value;
        this.setState(newState);        
    }
    
    render() {
        return (
            <Box>
                <Grid container sx={{height:'100vh'}}>
                <Grid xs={4}>
                    <FeedbackNav 
                        feedbacks={this.state.feedbacks} 
                        selected={this.selectedFeedbackId} 
                        handler={this.handleSelectedItemChange}
                        feedbackHandler={this.handleFeedbackItem}/>
                </Grid>
                <Grid xs={8} sx={{background:"#eeeeee", height:"100vh"}}>
                    <Box>
                    <StudentNavigation students={this.data.students} currentStudent={this.state.currentStudentHandle}/>
                    <FeedbackInfoPanel currentFeedback={this.state.feedbacks[this.state.selectedFeedbackId]}/>
                    </Box>
                </Grid>
                </Grid>
            </Box>
        );
    }
}

export default AppContainer;