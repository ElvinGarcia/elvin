import React from "react"
import Content from "./Content";
import { useQuery, gql } from "@apollo/client";
import { githubPinnedRepos } from '../../../queries/github';

export default function Github() {




  // const [data, setData] = useState([]);
  // useEffect(
  //   () => {
  //     // const url = 'https://api.github.com/users/elvingarcia/repos?sort=created&per_page=10'; official api
  //     const url = 'https://gh-pinned-repos.egoist.sh/?username=elvinGarcia';
  //     const getData = async () => {
  //       try {
  //         const resp = await fetch(url);
  //         const json = await resp.json();
  //         setData(json);
  //       } catch (error) {
  //         console.log("error message", error);
  //       }
  //     };
  //     getData();
  //   }
  //   , []);

// const client = ...

const PINNED_REPOS = gql`
${githubPinnedRepos.query}
`

  const { loading, error, data } = useQuery(PINNED_REPOS);
    if (loading) { console.log('this is loading ...🏃🏻‍♂️..') };
    if(error){console.log("An error occured: ", error)}


  const content = data && data.viewer.pinnedItems.repositories.map((obj) => {
    const { id, name, description, languages,stargazerCount, url } = obj.repository;
    return (< Content
      title={name}
      description={description}
      start_count={stargazerCount}
      url={url}
      key={id}
      languages={languages.languageObjects}
    />)
  }
  );

  return (
    <section className="github">
      <h2>GitHub</h2>
      {content}
    </section>
    )

}
