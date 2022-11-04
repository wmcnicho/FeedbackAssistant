const simpleGit = require("simple-git");
const { format } = require("@fast-csv/format");
const fs = require("fs");

simpleGit().clean(simpleGit.CleanOptions.FORCE);

async function mapAsync(arr, fn) {
    return await Promise.all(arr.map(fn));
}

async function filterAsync(arr, predicate) {
    const results = await mapAsync(arr, predicate);
    return arr.filter((_v, index) => results[index]);
}

/**
 * Returns the names of all directories that are valid git repos in the provided path.
 * 
 * @async
 * @param {string} path Path to the directory to search in.
 * @returns {Promise<Array<string>>} An array of directory names of all valid git repos in the provided path.
 */
async function fetchRepos(path) {
    const directories = fs.readdirSync(path, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
    return await filterAsync(directories, name => simpleGit(`${path}/${name}`).checkIsRepo(simpleGit.CheckRepoActions.IS_REPO_ROOT));
}

/**
 * Returns the remote urls of the provided git repos in the provided path.
 * This is the same as running 'git config --get remote.origin.url'.
 * 
 * @async
 * @param {Array<string>} repos An array of directory names of git repos
 * @param {string} path The parent directory of the repos
 * @returns {Promise<Array<string>>} An array of the remote URLs of the repos
 */
async function fetchGithubUrls(repos, path) {
    const results = await mapAsync(repos, repo => simpleGit(`${path}/${repo}`).getConfig("remote.origin.url"));
    return results.map(res => res.value);
}

/**
 * Reads the feedback object from a file
 * 
 * @param {string} path Path to the feedback object
 */
function fetchFeedbackObj(path) {
    return JSON.parse(fs.readFileSync(path));
}

/**
 * Saves the feedback object to a file as a JSON
 * 
 * @param {*} feedback Feedback object
 * @param {*} path Path to save with
 */
function saveFeedbackObj(feedback, path) {
    fs.writeFileSync(path, JSON.stringify(feedback));
}

/**
 * Writes all feedback to a CSV file
 * 
 * @param {Object} feedback A map from github handle to feedback
 * @param {string} path Directory to save the file
 */
function writeFeedbackToCsvFile(feedback, path) {
    const stream = format({headers: true});
    const ws = fs.createWriteStream(`${path}`);
    stream.pipe(ws);

    for (const [key, value] of Object.entries(feedback)) {
        stream.write({
            github: key,
            ...value,
        });
    }

    stream.end();
}

module.exports = {
    fetchRepos,
    fetchGithubUrls,
    fetchFeedbackObj,
    saveFeedbackObj,
    writeFeedbackToCsvFile,
}