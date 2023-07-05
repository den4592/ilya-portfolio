import clnk from "../assets/img/clnk.png";
import wcd from "../assets/img/world_countries_data.png";
import first_portfolio from "../assets/img/first_portfolio.png";
import second_portfolio from "../assets/img/second_portfolio.png";
import memory_strike from "../assets/img/memorystrike.png";
import wedding_invitation from "../assets/img/wedding_invitation.png";
import cherishu from "../assets/img/cherishu.png";

export const ProjectList = [
  {
    id: "clnk",
    title: "clnk - Internship",
    text: "학교에서 주최하는 산학협동인턴십으로 (주)버즈비터즈 사에서 약 4개월 동안 '클링크' 및 'SecondWay Studio' 웹 사이트 개발을 했습니다. SecondWay Studio 웹 사이트는 현재 다운 상태입니다. ",
    img: clnk,
    build_stack: ["HTML", "CSS", "JavaScript"],
    link: "https://c-lnk.com",
  },
  {
    id: "world_countries_data",
    title: "World Contries Data",
    text: "GitHub Asabeneh/30-Days-Of-JavaScript에서 제공하는 나라별 인구 및 언어 사용량 데이터를 가지고, Chart.js를 이용하여 해당 데이터를 시각화 및 정렬 기능을 구현하였습니다.",
    img: wcd,
    build_stack: ["HTML", "CSS", "JavaScript", "Chart.js"],
    link: "https://world-countries-data.netlify.app",
  },
  {
    id: "first_portfolio",
    title: "First Portfolio",
    text: "리액트와 styled-components를 이용하여 저의 첫 포트폴리오 웹 사이트를 개발하였습니다. 처음으로 애니메이션을 구현해보았고, 그와 관련된 각종 라이브러리들을 사용해본 경험을 가졌습니다.",
    img: first_portfolio,
    build_stack: ["React", "styled-components"],
    link: "https://denill-port.netlify.app",
  },
  {
    id: "second_portfolio",
    title: "Second Portfolio",
    text: "첫번째 포트폴리오 웹 사이트와 비교하여, 리액트 폴더 트리 구조 및 깔끔한 스타일링에 보다 많은 노력을 기울여 저의 두번째 포트폴리오 웹 사이트를 개발하였습니다. ",
    img: second_portfolio,
    build_stack: ["React", "Sass", "framer-motion"],
    link: "https://byeongju-ilsun.netlify.app",
  },
  {
    id: "memory_strike",
    title: "Memory Strike",
    text: "평소에 공부한 내용을 잊어버리지 않기 위해 MemoryStrike 웹 애플리케이션을 개발하게 되었습니다. 공부한 내용을 복습 및 셀프 테스팅을 해볼 수 있습니다.",
    img: memory_strike,
    build_stack: [
      "React",
      "TypeScript",
      "Sass",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS amplify",
      "AWS EC2",
    ],
    link: "https://www.memorystrike.com",
  },
  {
    id: "mobile_wedding_invitation",
    title: "Mobile Wedding Invitation",
    text: "지인의 부탁으로 모바일 청첩장을 구현하게 되었습니다. 방명록 기능 때문에 데이터베이스와 서버가 필요하게 되어 아키텍처를 클라이언트(React-배포:Netlify) / 서버(Express.js-배포:Heroku) 구조로 분할 후 개발을 진행하였습니다. 각종 애니메이션 효과들은 gsap을 통해 구현하였습니다.",
    img: wedding_invitation,
    build_stack: ["React", "MongoDB", "Express.js", "Node.js", "gsap"],
    link: "https://byeongju-ilsun.netlify.app",
  },
  {
    id: "cherishu",
    title: "Cherishu",
    text: "팀 프로젝트로 선물 추천 앱인 ‘Cherishu’를 개발하였습니다. 팀원분들과의 원활한 커뮤니케이션을 위해 서비스의 문제점 파악 및 해결 방안을 제의하였습니다. 또한, 디자이너 분과의 협업과 소통을 통해 홈페이지 디자인 관련 피드백을 적극적으로 반영하였습니다. ",
    img: cherishu,
    build_stack: ["React", "TypeScript", "Sass"],
    link: "https://cherishu.firebaseapp.com/",
  },
];
