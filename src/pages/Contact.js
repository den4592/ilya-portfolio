import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact">
          <h1 className="title title-black">
            <span>Contact</span>
          </h1>
          <form>
            <input type="email" placeholder="본인 이메일" />
            <input type="text" placeholder="이름" />
            <textarea placeholder="내용"></textarea>
            <button className="submit-btn">이메일 전송</button>
          </form>
          <div className="contacts">
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
          <h2 className="title-black">포트폴리오를 봐주셔서 감사합니다.</h2>
        </div>
      </div>
    </section>
  );
};

export default Contact;
