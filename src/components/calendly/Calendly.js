import React from "react";
import { PopupWidget } from "react-calendly";

const Calendly = () => {
  return (
    <>
      <PopupWidget url={process.env.REACT_APP_CALENDLY}
        rootElement={document.querySelector(".contact")}
        text="Schedule A Meeting!"
      />
    </>
  );
};

export default Calendly;

