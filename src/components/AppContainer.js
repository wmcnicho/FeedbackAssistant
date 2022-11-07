import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import FeedbackNav from './FeedbackNav'
import FeedbackInfoPanel from './FeedbackInfoPanel';
import StudentNavigation from './StudentNavigation';

class AppContainer extends React.Component {

    render() {
        return (
            <Box>
                <Grid container sx={{height:'100vh'}}>
                <Grid xs={4}>
                    <FeedbackNav/>
                </Grid>
                <Grid xs={8} sx={{background:"#eeeeee", height:"100vh"}}>
                    <Box>
                    <StudentNavigation/>
                    <FeedbackInfoPanel/>
                    </Box>
                </Grid>
                </Grid>
            </Box>
        );
    }
}

export default AppContainer;