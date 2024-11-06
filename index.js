require('dotenv').config();
// console.log(process.env);

const express = require('express'); 
const app = express(); 

// Mention port on which listening
const port = 3000;

const githubData = {
    "login": "Raj-jr",
    "id": 62259763,
    "node_id": "MDQ6VXNlcjYyMjU5NzYz",
    "avatar_url": "https://avatars.githubusercontent.com/u/62259763?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Raj-jr",
    "html_url": "https://github.com/Raj-jr",
    "followers_url": "https://api.github.com/users/Raj-jr/followers",
    "following_url": "https://api.github.com/users/Raj-jr/following{/other_user}",
    "gists_url": "https://api.github.com/users/Raj-jr/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Raj-jr/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Raj-jr/subscriptions",
    "organizations_url": "https://api.github.com/users/Raj-jr/orgs",
    "repos_url": "https://api.github.com/users/Raj-jr/repos",
    "events_url": "https://api.github.com/users/Raj-jr/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Raj-jr/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Raj Jagdale",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 0,
    "following": 2,
    "created_at": "2020-03-16T18:08:48Z",
    "updated_at": "2024-08-26T03:19:48Z"
  }

app.get('/', (req, res) => {
    console.log('juicy p');
    res.send('Welll cummm to port!!'); 
});

app.get('/bb', (req, res) => {
    res.send('<h1>Oooo Meri ZOHRAJABEEN, ISHQ DA JAM BEECHA JA</h1>')
});

app.get('/github', (req, res) => {
    res.json(githubData);
});

// Server is always listening.
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on ${port}`);
})