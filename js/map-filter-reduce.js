const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeOrMoreLang = users.filter(user => user.languages.length >= 3);
console.log(threeOrMoreLang);

let userEmails = users.map(user => user.email);
console.log(userEmails);

let totalExperience = users.reduce((years, user) => {
    return years + user.yearsOfExperience;
}, 0);
console.log(totalExperience);

let averageExperience = totalExperience / users.length;
console.log(averageExperience);

let longestEmail = userEmails.reduce((email1, email2) => email1.length > email2.length ? email1 : email2);
console.log(longestEmail);

let userNames = `My instructors are: ${users.reduce((names, user) => {
   names.push(user.name);
   return names;
}, []).join(", ")}.`;
console.log(userNames);

let langList = users.reduce((bucket, user) => {
    for (let el of user.languages) {
        if (bucket.includes(el) === false) {
            bucket.push(el);
        }
    }
    return bucket;
}, []).join(",").split(",")
// langList = Array.from(new Set(langList.split(","))).toString().split(",");
console.log(langList);