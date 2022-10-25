import React, { Component } from "react";

class Content extends Component{

  render() {
    return (
      <div className="contact_me form">
        <h2> Say Hello!</h2>
        <form method="post" name="contact">
          <ul>
            <li>
              <label htmlFor="name">Name
              </label>
              <input type="text" id="name" name="user_name" />
            </li>
            <li>
              <label htmlFor="mail">E-mail
              </label>
              <input type="email" id="mail" name="user_email" />
            </li>
            <li>
              <label htmlFor="msg">Message
              </label>
              <textarea id="msg" name="user_message"></textarea>
            </li>
            <li className="button">
              <button name="send" type="submit">Send</button>
            </li>
          </ul>
        </form>
      </div>
    )
  }
}


export default Content;