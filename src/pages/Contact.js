import { useState, useRef } from "react";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import selfie from "../assets/img/selfie.jpeg";

const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (email && name && text) {
      emailjs
        .sendForm(
          "testService",
          "template_o7633q9",
          form.current,
          "user_DddkUMZH1JHPkLpcKoIYc"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("이메일을 성공적으로 전송하였습니다.");
            setEmail("");
            setName("");
            setText("");
          },
          (error) => {
            console.log(error.text);
            alert("다시 시도해 주세요.");
          }
        );
    } else {
      alert("내용을 다 채워주세요");
      return;
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact">
          <h1 className="title title-black">
            <span>Contact</span>
          </h1>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="email"
              value={email}
              placeholder="본인 이메일"
              name="user_email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              value={name}
              placeholder="이름"
              name="user_name"
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              value={text}
              placeholder="내용"
              name="message"
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button className="submit-btn" value="Send">
              이메일 전송
            </button>
          </form>
          <div className="contacts">
            <div className="selfie">
              <img src={selfie} />
            </div>

            <div className="email item">
              <span>
                <MdEmail />
              </span>
              <span>den4592@naver.com</span>
            </div>
            <div className="phone item">
              <span>
                <AiFillPhone />
              </span>
              <span>010-8561-1536</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
