import React from 'react'
import Button from '@mui/material/Button';
import PostComment from './postComment';

class GitHubButton extends React.Component {
    constructor(props) {
        super(props); 
    }

    onclick() {
        // This is where I call your code
        console.log("Clicked.")
        PostComment()
        
    }

    render() {
        return(
            <div>
                <Button variant="contained" onClick={PostComment()}>Post Comment to Github</Button>
            </div>
        )
    }
}
export default GitHubButton