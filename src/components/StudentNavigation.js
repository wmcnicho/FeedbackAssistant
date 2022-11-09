import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Button, Link, Tooltip, Typography } from '@mui/material';

class StudentNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <Grid container sx={{display:"block", background:"white"}}>
                    <Grid>
                        <Grid sx={{display:"flex", justifyContent:"space-between"}}>
                            <Tooltip title="Previous Submission" onClick={() => this.props.changeStudentHandler(false)}>
                                <Button variant="contained" color="primary">
                                    <ArrowLeftIcon fontSize='large' />
                                </Button>
                            </Tooltip>
                            <Button>
                                <Tooltip title="View On Github">
                                    <Typography component='h6' variant='h4'>
                                        <Link href={this.props.student?.url} target="_blank">
                                            {this.props.student?.github}
                                        </Link>
                                    </Typography>
                                </Tooltip>
                            </Button>
                            <Tooltip title="Next Submission" onClick={() => this.props.changeStudentHandler(true)} placement='bottom'>
                                <Button variant="contained" color="primary">
                                    <ArrowRightIcon fontSize='large' />
                                </Button>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}
export default StudentNavigation