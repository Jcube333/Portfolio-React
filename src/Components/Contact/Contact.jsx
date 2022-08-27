import React from "react";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useContext } from "react";
import { themeContext } from "../../Context";

function Contact() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();
  const [Done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5sac77f",
        "template_sooc1y7",
        form.current,
        "7aNGKskzb0wL8Xm53"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="Contact-Wrapper">
      <div className="ct-left">
        <span style={{ color: darkMode ? "white" : "black" }}>
          Get in Touch
        </span>
        <span>Contact Me</span>
        <div className="blur2 ct-blur2"></div>
      </div>
      <div className="ct-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" id="" placeholder="Name" />
          <input type="mail" name="mail" id="" placeholder="E-mail" />
          <textarea
            name="message"
            id=""
            cols="25"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <input className="button" type="Submit" value="Send" />
          <div className="blur ct-blur1"></div>
          <span>
            {Done && "Thanks for Contacting Me. I'll soon get back to you😃"}
          </span>
        </form>
      </div>
    </div>
  );
}
export default Contact;
