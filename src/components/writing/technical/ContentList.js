import React,{useRef} from "react";
import Content from "./Content";


const ContentList = (props) => {
  const contentEl = useRef();
  return (
    <>
      <div className={`accordion-item ${props.active ? 'active' : ""}`} >
        <h2 className={"accordion-header"} onClick={props.onToggle}>
          {props.title}
          {/* <span className="control">—</span> */}
        </h2>
        <div
          className={"accordion-body"}
          ref={contentEl}
          style={
            props.active
              ? { height: contentEl.current }
              : { height: "0", fontSize:"0" }
          }
        >
          <Content content={props.content}  />
        </div>
      </div>
    </>
  )
}


export default ContentList;

