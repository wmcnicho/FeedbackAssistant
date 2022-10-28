import React from 'react'
import Button from '@mui/material/Button';

class GitHubButton extends React.Component {
    constructor(props) {
        super(props); 
    }

    onclick() {
        // This is where I call your code
    }

    
    render() {
        return(
            <div>
                <Button variant="contained">Post Comment to Github</Button>
            </div>
        )
    }
}
export default GitHubButton