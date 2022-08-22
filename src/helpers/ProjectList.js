import clnk from "../assets/img/clnk.png";
import wcd from "../assets/img/world_countries_data.png";
import first_portfolio from "../assets/img/first_portfolio.png";
import memory_strike from "../assets/img/memorystrike.png";
import wedding_invitation from "../assets/img/wedding_invitation.png";

export const ProjectList = [
  {
    title: "clnk - 인턴십",
    text: "학교에서 주최하는 산학협동인턴십으로 (주)버즈비터즈 사에서 약 4개월 동안 '클링크' 및 'SecondWay Studio' 웹 사이트 개발을 했습니다. SecondWay Studio 웹 사이트는 현재 다운 상태입니다. ",
    img: clnk,
    build_stack: ["HTML", "CSS", "JavaScript"],
    link: "https://c-lnk.com",
  },
  {
    title: "World Contries Data",
    text: "GitHub Asabeneh/30-Days-Of-JavaScript에서 제공하는 나라별 인구 및 언어 사용량 데이터를 가지고, Chart.js를 이용하여 해당 데이터를 시각화 및 정렬 기능을 구현하였습니다.",
    img: wcd,
    build_stack: ["HTML", "CSS", "JavaScript", "Chart.js"],
    link: "https://world-countries-data.netlify.app",
  },
  {
    title: "첫 포트폴리오",
    text: "리액트와 styled-components를 이용하여 저의 첫 포트폴리오 웹 사이트를 개발하였습니다. 처음으로 애니메이션을 구현해보았고, 그와 관련된 각종 라이브러리들을 사용해본 경험을 가졌습니다.",
    img: first_portfolio,
    build_stack: ["React", "styled-components"],
    link: "https://denill-port.netlify.app",
  },
  {
    title: "Memory Strike",
    text: "헤르만 에빙하우스의 망각 곡선을 보고 영감을 받았고, 평소에 공부한 내용을 까먹지 않기 위해 해당 웹 애플리케이션을 개발하게 되었습니다. 공부한 내용을 복습 및 셀프 테스팅을 해볼 수 있습니다.",
    img: memory_strike,
    build_stack: ["React", "AWS"],
    link: "https://www.memorystrike.com",
  },
  {
    title: "모바일 청첩장",
    text: "지인의 부탁으로 모바일 청첩장을 구현하게 되었습니다. 방명록 기능 때문에 데이터베이스와 서버가 필요하게 되어 아키텍처를 클라이언트(React-배포:Netlify) / 서버(Express.js-배포:Heroku) 구조로 분할 후 개발을 진행하였습니다. 각정 애니메이션 효과들은 gsap을 통해 구현하였습니다.",
    img: wedding_invitation,
    build_stack: ["MongoDB", "Express.js", "React", "Node.js", "gsap"],
    link: "https://byeongju-ilsun.netlify.app",
  },
];
