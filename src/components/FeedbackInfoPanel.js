import { Paper, Typography, Box, Button } from '@mui/material';
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import PostComment from './PostComment';

class FeedbackInfoPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick() {
        const classRoomName = "feedbackassistant"
        const assignmentName = "test-token"
        const studentGithubId = "JAEWOOKe"
        const commentBody = "Integrating UI!!!!"
        const repoName = `${assignmentName}-${studentGithubId}`
        console.log(classRoomName, repoName, commentBody)
        PostComment(classRoomName, repoName, commentBody)
    }

    render() {
        return(
            <React.Fragment>
                <Box p={6}>
                    <Typography variant="h3">{this.props.currentFeedback.title}</Typography>
                    <Box py={4}>
                        <Paper elevation={3}>
                            <Typography variant="h6">{this.props.currentFeedback.short_desc}</Typography>
                        </Paper>
                    </Box>
                    <Box py={4}>
                        <Paper  elevation={3}>
                            <Typography variant="body1">{this.props.currentFeedback.long_desc}</Typography>
                        </Paper>
                    </Box>
                    <Box display={{display:'flex', justifyContent:"space-evenly"}}>
                        <Button variant="contained" endIcon={<GitHubIcon />} onClick={this.handleClick} >Add To Github</Button>
                        <Button variant="contained" endIcon={<ContentPasteIcon />}>Copy To Clipboard</Button>
                    </Box>
                </Box>
            </React.Fragment>
        )
    }
}
export default FeedbackInfoPanel