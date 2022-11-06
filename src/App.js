import './App.css';
import React, { Component } from 'react'
import GitHubButton from './githubButton';
import ModalButtion from './ModalButtion';

const { Octokit } = require("@octokit/rest");
const apiKey = `${process.env.REACT_APP_API_KEY}`
export const octokit = new Octokit({ 
    auth: apiKey,
  });

// handleBoolFlagUpdate(boolFlag) {
//   let newState = this.state;
//   newState.boolFlag = boolFlag;
//   console.log(boolFlag)
//   this.setState(newState)
// }

// function App() {
//   return (
//     <div className="App">
//       <GitHubButton/>
//       <ModalButtion/>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feedback : []
    }
    this.handleFeedbackUpdate = this.handleFeedbackUpdate.bind(this)
  }
  handleFeedbackUpdate(feedback) {
    let newState = this.state;
    newState.feedback = feedback;
    console.log(feedback)
    this.setState(newState)
}

  render() {
    return (
      <div>
        <GitHubButton/>
        <ModalButtion
          feedback={this.state.feedback}
          feedbackHandler={this.handleFeedbackUpdate}/>
      </div>
    )
  }
}


export default App;
