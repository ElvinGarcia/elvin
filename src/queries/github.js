
const githubProfile = {
query:`query ProfileInfo{
    viewer {
      name
      bio
      email
      websiteUrl
      githubUrl: url
      avatarUrl
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



