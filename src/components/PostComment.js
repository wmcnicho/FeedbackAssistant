export default function PostComment(classRoomName, repoName, commentBody, apiKey) {
    console.log(`${classRoomName} ${repoName} ${commentBody}`)
    const { Octokit } = require("@octokit/rest");
    const octokit = new Octokit({ 
        auth: apiKey,
    });
    
    const {data: user} = octokit.request('Get /user')

    const owner = classRoomName
    const repo = repoName

    const { comment } = octokit.rest.issues.createComment({
        owner,
        repo,
        issue_number: 1,
        body: commentBody,
    });
}

export { PostComment }; 