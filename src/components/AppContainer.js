import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import FeedbackNav from './FeedbackNav'
import FeedbackInfoPanel from './FeedbackInfoPanel';
import StudentNavigation from './StudentNavigation';

const mockData = {
    "title": "Assignment 1",
    "feedback_items": {
        "1": {
            "title": "Incorrect for-loop",
            "type": "major_bug",
            "short_desc": "For-loop is not exiting",
            "long_desc": "Your for-loop is looping forever because the exit conditions are not met"
        },
        "2": {
            "title": "Good test",
            "type": "positive",
            "short_desc": "Very thorough tests!",
            "long_desc": "Your tests have a good code coverage and hit many edge cases. Keep it up!"
        },
        "3": {
            "title": "Excellent",
            "type": "positive",
            "short_desc": "Excellent work!",
            "long_desc": "Everything is perfect!"
        }
    },
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
                selectedFeedbackId: 1,
                currentFeedbackItem: this.data.feedback_items["1"]
        }
        this.handleSelectedItemChange = this.handleSelectedItemChange.bind(this);
    }

    handleSelectedItemChange(value) {
        let newState = this.state;
        newState["selectedFeedbackId"] = value;
        newState["currentFeedbackItem"] = this.data.feedback_items[value.toString()];
        this.setState(newState);
    }

    render() {
        return (
            <Box>
                <Grid container sx={{height:'100vh'}}>
                <Grid xs={4}>
                    <FeedbackNav feedback={this.data.feedback_items} selected={this.selectedFeedbackId} handler={this.handleSelectedItemChange}/>
                </Grid>
                <Grid xs={8} sx={{background:"#eeeeee", height:"100vh"}}>
                    <Box>
                    <StudentNavigation students={this.data.students} currentStudent={this.state.currentStudentHandle}/>
                    <FeedbackInfoPanel currentFeedback={this.state.currentFeedbackItem}/>
                    </Box>
                </Grid>
                </Grid>
            </Box>
        );
    }
}

export default AppContainer;