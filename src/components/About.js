const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about">
          <h1 className="about__title">
            ILYA's
            <br /> <span>Portfolio</span>
          </h1>
          <ul className="self-introduction">
            <li>
              안녕하세요 저는 <span>일리야</span>라고 합니다
            </li>
            <li>
              중앙대학교 <span>컴퓨터공학</span>을 전공하였습니다
            </li>
            <li>
              <span>React</span>를 기반으로 <span>Front-End 웹 개발</span>을
              하고 있습니다
            </li>
            <li>
              <span>Saas</span> 개발에 관심이 많아 <span>웹 애플리케이션</span>
              을 만든어 본 다수의 <span>경험</span>이 있습니다
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
