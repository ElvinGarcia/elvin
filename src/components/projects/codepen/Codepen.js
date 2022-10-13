import React from "react"
import Content from "./Content";

export default function Codepen() {

  const pens = [{
    title: 'Analog Clock',
    snippet: <iframe height="300" width="100%;" scrolling="no" title="Analog Clock" src="https://codepen.io/elvingarcia/embed/RwGmjbB" frameborder="no" loading="lazy" allowtransparency={true} allowFullscreen={true}>
    See the Pen <a href="https://codepen.io/elvingarcia/embed/RwGmjbB">
    Analog Clock</a> by Elvin (<a href="https://codepen.io/elvingarcia">@elvingarcia</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>,
    url: "https://codepen.io/elvingarcia/full/RwGmjbB",
    id: "RwGmjbB",
    description: 'Analog Clock made purely in Javascript, CSS and HTML',
  },
  {
    title: 'Speed Typing',
    snippet:
    <iframe height="300" width="100%;" scrolling="no" title="Speed Typing" src="https://codepen.io/elvingarcia/embed/abBOgzj?default-tab=" frameborder="no" loading="lazy" allowtransparency={true} allowFullscreen={true}>
    See the Pen <a href="https://codepen.io/elvingarcia/pen/abBOgzj">
    Speed Typing</a> by Elvin (<a href="https://codepen.io/elvingarcia">@elvingarcia</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>,
    url:'https://codepen.io/elvingarcia/full/abBOgzj',
    id: 'abBOgzj',
    description:'This is a typing test. Your goal is to duplicate the provided text, EXACTLY, in the field below. The timer starts when you start typing, and only stops when you match this text exactly',
    },
    {
      title: 'CSS ART',
    snippet:
    <iframe height="300" width= "100%" scrolling="no" title="A Simple CSS Art" src="https://codepen.io/elvingarcia/embed/abGmwBp?" frameborder="0" loading="lazy" allowtransparency={true} allowFullscreen={true}>
    See the Pen <a href="https://codepen.io/elvingarcia/pen/abGmwBp">
    A Simple CSS Art</a> by Elvin (<a href="https://codepen.io/elvingarcia">@elvingarcia</a>)
    on <a href="https://codepen.io">CodePen</a>.
        </iframe>,
    url:'https://codepen.io/elvingarcia/full/abGmwBp',
    id: 'abGmwBp',
    description:'Simple CSS Art',
    },

  ]

  const content = pens.map(obj => <Content title={obj.title} snippet={obj.snippet} url={obj.url} description={obj.description } key={obj.id } /> );

  return (
      <section className="codepen">
        <h2>Codepen</h2>
        {content}
      </section>
    )

}


