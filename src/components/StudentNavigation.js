import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import GradingIcon from '@mui/icons-material/Grading';
import { Button, ButtonGroup, IconButton, Input, Link, Tooltip, Typography } from '@mui/material';

class StudentNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.students = props.students;
        this.state = {
                "score": 100,
                "currentStudent": this.props.currentStudent
            }; 
    }

    handleScoreChange(event, newScore) {
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
                            <Tooltip title="Previous Submission">
                                <Button variant="contained" color="primary">
                                    <ArrowLeftIcon />
                                </Button>
                            </Tooltip>
                            <Button>
                                <Tooltip title="View On Github">
                                    <Typography component='h6' variant='h4'>
                                        <Link href={this.students[this.state.currentStudent].url}>
                                            {this.state.currentStudent}
                                        </Link>
                                    </Typography>
                                </Tooltip>
                            </Button>
                            <Tooltip title="Next Submission" placement='bottom'>
                                <Button variant="contained" color="primary">
                                    <ArrowRightIcon />
                                </Button>
                            </Tooltip>
                        </Grid>
                        <Grid>
                                <ButtonGroup variant="outlined">
                                    <Tooltip title="Post Score">
                                        <Button color="primary">
                                            <CloudUploadIcon/>
                                        </Button>
                                    </Tooltip>
                                    <Tooltip title="View Gradesheet">
                                        <Button color="primary">
                                            <GradingIcon/>
                                        </Button>
                                    </Tooltip>
                                </ButtonGroup>
                        </Grid>
                        <Grid>
                            <Box sx={{display:"flex", justifyContent:"space-around"}}>
                                <Box>
                                    <Typography variant='h6' display="inline">Current Points</Typography>
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