
const github = {
  baseURL: "https://api.github.com/graphql",
  username: "elvingarcia",
  headers: {
    "Content-Type": "application/graphql",
    Authorization: `bearer ${GITHUB_GRAPHQL}`,
  },
};


export default github;