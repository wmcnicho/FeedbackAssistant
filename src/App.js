import './App.css';
import GitHubButton from './githubButton';
import ModalButtion from './ModalButtion';
const { Octokit } = require("@octokit/rest");
const apiKey = `${process.env.REACT_APP_API_KEY}`
export const octokit = new Octokit({ 
    auth: apiKey,
  });

function App() {
  return (
    <div className="App">
      <GitHubButton/>
      <ModalButtion/>
    </div>
  );
}

export default App;
