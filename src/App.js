import './App.css';
import GitHubButton from './components/githubButton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import FeedbackNav from './components/FeedbackNav'
import FeedbackInfoPanel from './components/FeedbackInfoPanel';
import StudentNavigation from './components/StudentNavigation';

function App() {
  return (
    <div className="App">
      <Box>
      <Grid container sx={{height:'100vh'}}>
          <Grid xs={4}>
            <FeedbackNav/>
          </Grid>
          <Grid xs={8} sx={{background:"lightgrey", height:"100vh"}}>
            <Box>
              <StudentNavigation/>
              <FeedbackInfoPanel/>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
