import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Left() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_71jaobp",
        "template_217smhi",
        form.current,
        "rmClot46rx8gvTlCd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="left">
      <form
        className="form flex flex-col items-start"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          className="name w-[500px] p-[8px] border-2 border-gray"
          placeholder="Name"
          type="text"
          name="user_name"
        />
        <input
          className="email w-[500px] p-[8px] border-2 border-gray mt-[20px]"
          placeholder="Email"
          type="email"
          name="user_email"
        />
        <textarea
          className="message w-[500px] p-[8px] border-2 border-gray mt-[20px]"
          placeholder="Message"
          type="text"
          name="message"
          rows={10}
        />
        <button
          id="sendBtn"
          className="sendBtn mt-[20px] w-[500px] flex items-center justify-center bg-[#d64256] p-[8px] text-white font-medium active:bg-gray"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Left;
