import React from "react"
import Content from "./Content";
import { useQuery, gql } from "@apollo/client";
import { githubPinnedRepos } from '../../../queries/github';

export default function Github() {

const PINNED_REPOS = gql`
${githubPinnedRepos.query}
`

  const { loading, error, data } = useQuery(PINNED_REPOS);
    if (loading) { console.log('this is loading ...🏃🏻‍♂️..') };
    if(error){console.log("An error occured: ", error)}

  const content = data && data.viewer.pinnedItems.repositories.map((obj) => {
    const { id, name, description, languages,stargazerCount, url } = obj.repository;
    return (
    <Content
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
