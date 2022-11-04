import { octokit } from "./App";

export default function PostComment(classRoomName, repoName, commentBody) {
    console.log("Posting Comment!")
    
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