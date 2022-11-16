import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import FeedbackNav from './FeedbackNav'
import FeedbackInfoPanel from './FeedbackInfoPanel';
import StudentNavigation from './StudentNavigation';

class AppContainer extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
                feedbacks: [],
                selectedFeedbackId: 0,
                students: [],
                currentStudentIndex: 0,
                directory: "",
                title: "",
                subtitle: "",
                gitClassroomInfo: {"Classroom" : "", "Assignment": "", "ApiKey": ""}
        }
        this.handleSelectedItemChange = this.handleSelectedItemChange.bind(this);
        this.handleFeedbackItem = this.handleFeedbackItem.bind(this);
        this.handleChooseDirectory = this.handleChooseDirectory.bind(this);
        this.handleChangeStudent = this.handleChangeStudent.bind(this);
        this.handleClassroom = this.handleClassroom.bind(this)
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

    handleClassroom(value) {
        let newState = this.state;
        newState.gitClassroomInfo = value;
        this.setState(newState);        
    }

    handleChooseDirectory(path, students, feedback) {
        this.setState({
            directory: path,
            students: students,
            feedbacks: feedback?.feedback_items ?? [],
            title: feedback?.title ?? "",
            subtitle: feedback?.subtitle ?? "",
            currentStudentIndex: 0,
            selectedFeedbackId: 0,
        });
    }

    handleChangeStudent(isNext) {
        const len = this.state.students.length;
        if (len === 0) {
            return;
        }

        if (isNext) {
            this.setState((prevState) => ({
                currentStudentIndex: Math.min(len - 1, prevState.currentStudentIndex + 1),
            }));
        } else {
            this.setState((prevState) => ({
                currentStudentIndex: Math.max(0, prevState.currentStudentIndex - 1),
            }));
        }
    }
    
    render() {
        return (
            <Box>
                <Grid container sx={{height:'100vh'}}>
                <Grid xs={4}>
                    <FeedbackNav 
                        feedbacks={this.state.feedbacks} 
                        selected={this.selectedFeedbackId} 
                        title={this.state.title}
                        subtitle={this.state.subtitle}
                        handler={this.handleSelectedItemChange}
                        feedbackHandler={this.handleFeedbackItem}
                        classroomHandler={this.handleClassroom}
                        chooseDirectoryHandler={this.handleChooseDirectory}/>
                </Grid>
                <Grid xs={8} sx={{background:"#eeeeee", height:"100vh"}}>
                    <Box>
                    <StudentNavigation
                        student={this.state.students.length > 0 ? this.state.students[this.state.currentStudentIndex] : {}}
                        changeStudentHandler={this.handleChangeStudent}
                        />
                    <FeedbackInfoPanel 
                        currentFeedback={this.state.feedbacks.length > 0 ? this.state.feedbacks[this.state.selectedFeedbackId] : {}}
                        gitClassroomInfo={this.state.gitClassroomInfo}
                        student={this.state.students.length > 0 ? this.state.students[this.state.currentStudentIndex] : {}}/>
                    </Box>
                </Grid>
                </Grid>
            </Box>
        );
    }
}

export default AppContainer;