import { Paper, Typography, Box, Button } from '@mui/material';
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import PostComment from './PostComment';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class FeedbackInfoPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick(feedback) {
        const classRoomName = this.props.gitClassroomInfo["Classroom"]
        const assignmentName = this.props.gitClassroomInfo["Assignment"]
        const studentGithubId = this.props.student["github"]
        const repoName = `${assignmentName}-${studentGithubId}`
        const apiKey = this.props.gitClassroomInfo["ApiKey"]

        let commentBody = `### Feedback: ${feedback.title}\n **${feedback.short_desc}**\n${feedback.long_desc}\n\n*Note: This comment was posted from a UCA using the FeedBackAssistant App.*`
        console.log(commentBody)
        PostComment(classRoomName, repoName, commentBody, apiKey);
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
                        <Button variant="contained" endIcon={<GitHubIcon />} onClick={() => this.handleClick(this.props.currentFeedback)} >Add To Github</Button>
                        <CopyToClipboard text={this.props.currentFeedback.long_desc}>
                            <Button variant="contained" endIcon={<ContentPasteIcon />}>Copy To Clipboard</Button>
                        </CopyToClipboard>
                    </Box>
                </Box>
            </React.Fragment>
        )
    }
}
export default FeedbackInfoPanel