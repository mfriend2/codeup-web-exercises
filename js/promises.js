const lastCommit = (username) => {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_ACCESS_TOKEN}`}})
        .then(response => response.json())
        .then(data => {
            let pushEvents = data.filter(dataType => dataType.type === 'PushEvent')
            let firstEvent = pushEvents[0]
            let mostRecentCommitURL = firstEvent.payload.commits[0].url
           return fetch(mostRecentCommitURL, {headers: {'Authorization': `token ${GITHUB_ACCESS_TOKEN}`}})
        })
        .then(response => response.json())
        .then(data => data.commit.author.date)
        .catch(error => error)
};
lastCommit('mfriend2').then(data => console.log(data));

const wait = num => {
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve(`I have resolved after ${num / 1000} seconds.`);
        }, num);
    });
};
console.log(wait(3000).then(data => console.log(data)));
// const wait = num => {
//     return new Promise(resolveAfterWait)
// };

// const resolveAfterWait = (resolve) => {
//     setTimeout(() => {
//         resolve(`I have resolved after ${num / 1000} seconds.`)
//     }, num)
// };
