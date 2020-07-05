# Github search
## Features
- Github search
- Profile page
- Repository list

User has to be able to search for a particular GitHub account name, and if there is
a match application has to display:
- User profile (profile picture, username and email, link to GitHub profile)
- Repository list (full repo name and repo description, link to GitHub repo)

User has to be able to sort repositories by name.
User repositories should be cached in order to assure immediate access of user
data if the same search is executed.

### Environment
- Node version v12.18.2
- NPM 6.14.5

### Running
1. Add your Github personal access token with `read:user` and `user:email` scopes
2. Start development server by running
`npm run start`
### Schema download
`GITHUB_PERSONAL_ACCESS_TOKEN=token npm run apollo-download-schema`
### Types generation
`GITHUB_PERSONAL_ACCESS_TOKEN=token npm run apollo-codegen`
### Architecture
Apollo boost used here because it provide caching feature
### Priorities
- Mobile first
