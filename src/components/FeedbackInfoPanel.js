import { Paper, Typography, Box, Button } from '@mui/material';
import React from 'react'

class FeedbackInfoPanel extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return(
            <React.Fragment>
                <Box sx={{background:"lightgrey", height:"100vh"}} p={6}>
                    <Typography variant="h3">Feedback 1</Typography>
                    <Box py={4}>
                        <Paper elevation={3}>
                            <Typography variant="h6">Brief Description for context</Typography>
                        </Paper>
                    </Box>
                    <Box py={4}>
                        <Paper  elevation={3}>
                            <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam</Typography>
                        </Paper>
                    </Box>
                    <Box display={{display:'flex', justifyContent:"space-evenly"}}>
                        <Button variant="contained">Add To Github</Button>
                        <Button variant="contained">Copy To Clipboard</Button>
                    </Box>
                </Box>
            </React.Fragment>
        )
    }
}
export default FeedbackInfoPanel