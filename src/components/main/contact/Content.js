
import React,{useRef} from "react";


function Content() {

  const form = useRef();

  const formSubmit = event => {
    event.preventDefault();

    // const name = form.current.user_name.value;
    // const email = form.current.user_email.value;
    // const message = form.current.user_message.value;
    // window.location.href = `mailto:dev@ElvinGarcia.com?subject=${name}:${email}&body=${message}`;
    // reset form fields
    form.current.reset();

}

    return (
      <div className="contact_me form">
        <h2> Say Hello!</h2>
        <form method="POST" name="contact" ref={form} data-netlify="true" onSubmit={formSubmit}>
          <ul>
            <li>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="user_name"/>
            </li>
            <li>
              <label htmlFor="mail">E-mail</label>
              <input type="email" id="mail" name="user_email" />
            </li>
            <li>
              <label htmlFor="msg">Message</label>
              <textarea id="msg" name="user_message" ></textarea>
            </li>
            <li className="button">
              <button name="send" type="submit">Send</button>
            </li>
          </ul>
        </form>
      </div>
    )
  }



export default Content;