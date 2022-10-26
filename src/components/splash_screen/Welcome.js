import React from "react";
import Content from "./Content"

export default function Welcome() {
  const assets = {
      images: [
         {
            type: 'logo',
          src: './assets/images/elvin.svg',
            alt: 'site logo',
            name: 'Elvin Garcia',
          url: '/',
          }
        ],
    }

  const content = assets.images.map((obj, i) => <Content name={obj.name} logo={obj.src} greeting={"Hi, I'm Elvin."} callToAction={"View my porfolio"} key={i} alt={obj.alt } />)


  return (
      <>
      {content}
      </>
 )
}