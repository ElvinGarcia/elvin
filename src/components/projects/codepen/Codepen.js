import React from "react"
import Content from "./Content";

export default function Codepen() {

  const pens = [{
    title: 'Analog Clock',
    snippet: <iframe height="400" width="100%" scrolling="no" title="Analog Clock"
      src="https://codepen.io/elvingarcia/embed/RwGmjbB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See Pen <a href="https://codepen.io/elvingarcia/pen/RwGmjbB">
    Analog Clock</a> by Elvin (<a href="https://codepen.io/elvingarcia">@elvingarcia</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>,
    url: "https://codepen.io/elvingarcia/pen/RwGmjbB",
    id: "RwGmjbB",
    description: 'Analog Clock made purely in Javascript, CSS and HTML',
  },
  {
    title: 'Speed Typing',
    snippet:
      <iframe height="400" width="100%" scrolling="no" title="Speed Typing"
        src="https://codepen.io/elvingarcia/embed/abBOgzj?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See Pen <a href="https://codepen.io/elvingarcia/pen/abBOgzj">
  Speed Typing</a> by Elvin (<a href="https://codepen.io/elvingarcia">@elvingarcia</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>,
    url:'https://codepen.io/elvingarcia/pen/abBOgzj',
    id: 'abBOgzj',
    description:'This is a typing test. Your goal is to duplicate the provided text, EXACTLY, in the field below. The timer starts when you start typing, and only stops when you match this text exactly',
  }
  ]

  const content = pens.map(obj => <Content title={obj.title} snippet={obj.snippet} url={obj.url} description={obj.description } key={obj.id } /> );

  return (
      <section className="codepen">
        <h2>Codepen</h2>
        {content}
      </section>
    )

}


