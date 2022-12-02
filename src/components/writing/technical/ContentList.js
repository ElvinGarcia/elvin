import React from "react";
import Content from "./Content";
import Accordion from 'react-bootstrap/Accordion';

const ContentList = (props) => {
  return (
    <>
      <Accordion.Item eventKey={props.eventKey}>
        <Accordion.Header as={"h2"} className="technical writing content title">
          {props.title}
        </Accordion.Header>
        <Accordion.Body as={"div"} className="writing content">
          <Content content={props.content} />
        </Accordion.Body>
      </Accordion.Item>
    </>
  )
}


export default ContentList;

