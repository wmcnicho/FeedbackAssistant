// TOKEN = process.env.GITHUB_TOKEN

const { Octokit } = require("@octokit/rest");
const apiKey = `${process.env.REACT_APP_API_KEY}`
const octokit = new Octokit({ 
    auth: apiKey,
  });

export default function PostComment() {
    // console.log(apiKey)
    const {data: user} = octokit.request('Get /user')
    // console.log(`authenticated as ${user.login}`)

    const owner = "feedbackassistant"
    const repo = "test-token-JAEWOOKe"

    const { comment } = octokit.rest.issues.createComment({
        owner,
        repo,
        issue_number: 1,
        body: "👋 Thanks for reporting!",
    });

    // console.log("Comment created: %s", comment);
}

console.log("Hello auth!");
// (async () => { run() })()

export { PostComment }; 