import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import GradingIcon from '@mui/icons-material/Grading';
import { Button, ButtonGroup, IconButton, Input, Tooltip, Typography } from '@mui/material';

class StudentNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"score": 100}; 
    }

    handleScoreChange(event, newScore) {
        console.log("Callback")
        if (newScore > 100){
            newScore = 100;
        } 
        if (newScore < 0) {
            newScore = 0;  
        }
        let newState = this.state;
        newState.score = newScore;
        this.setState(newState)
    }

    render() {
        return(
            <React.Fragment>
                <Grid container sx={{display:"block", background:"white"}}>
                    <Grid>
                        <Grid sx={{display:"flex", justifyContent:"space-between"}}>
                            <Button variant="contained" color="primary">
                                <ArrowLeftIcon />
                            </Button>
                            <Button>
                                <Typography component='h6' variant='h4'>@wmcnicho</Typography>
                            </Button>
                            <Button variant="contained" color="primary">
                            <ArrowRightIcon />
                            </Button>
                        </Grid>
                        <Grid>
                            {/* <Box sx={{display:"flex", justifyContent:"space-around"}}>
                                <Button variant="contained" color="primary">
                                            View Code
                                </Button>
                            </Box> */}
                        </Grid>
                        <Grid>
                            <Box sx={{display:"flex", justifyContent:"space-around"}}>
                                <Box>
                                    <Typography variant='overline'>Current Points</Typography>
                                    <Input
                                            px={3}
                                            sx={{
                                                '& input' : {
                                                    textAlign:"right !important",
                                                    }
                                                }}
                                                
                                            value={this.state.score}
                                            size="small"
                                            onChange={(event) => this.handleScoreChange(event, event.target.value)}
                                            inputProps={{
                                                step: 1,
                                                min: 0,
                                                max: 100,
                                                type:'number',
                                                sx:{textAlign:"right"}
                                            }}
                                        />
                                        <ButtonGroup variant="outlined">
                                            <Button color="primary">
                                                Post Score
                                            </Button>
                                            <Tooltip title="View Gradesheet">
                                                <Button color="primary">
                                                    <GradingIcon/>
                                                </Button>
                                            </Tooltip>
                                        </ButtonGroup>
                                </Box>
                            </Box>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}
export default StudentNavigation