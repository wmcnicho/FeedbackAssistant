import React from 'react'
import Button from '@mui/material/Button';
import PostComment from './postComment';

class GitHubButton extends React.Component {
    constructor(props) {
        super(props); 
        this.handleClick = this.handleClick.bind(this);
    }
    

    handleClick() {
        // This is where I call your code
        console.log("Clicked.")
        const classRoomName = "feedbackassistant"
        const assignmentName = "test-token"
        const studentGithubId = "JAEWOOKe"
        const commentBody = "Moved api key to app!"
        const repoName = `${assignmentName}-${studentGithubId}`
        PostComment(classRoomName, repoName, commentBody)
        
    }

    render() {
        return(
            <div>
                <Button variant="contained" onClick={this.handleClick}>Post Comment to Github</Button>
            </div>
        )
    }
}
export default GitHubButton