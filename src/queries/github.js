
const githubProfile = {
query:`query ProfileInfo {
  user: viewer {
    id
    name
    bio
    email
    websiteUrl
    githubUrl: url
    twitterUsername
    avatarUrl
    biography: repository(name: "ElvinGarcia") {
      description: object(expression: "main:README.md") {
        ... on Blob {
          text
        }
      }
    }
  }
}`
};



const githubPinnedRepos = {
  query:`query PinnedRepos {
    viewer {
      pinnedItems(first: 10) {
        repositories: edges {
          repository: node {
            ... on Repository {
              id
              name
              description
              stargazerCount
              url
              languages(first: 10) {
                languageObjects: edges {
                  language: node {
                    id
                    color
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }`,
}



export { githubProfile , githubPinnedRepos }



