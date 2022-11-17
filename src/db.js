const github = {
  baseURL: process.env.REACT_APP_SERVER_PROFILE,
  username: "elvingarcia",
  headers: {
    "Content-Type": "application/graphql",
    Authorization: `bearer `,
  },
};


export default github;