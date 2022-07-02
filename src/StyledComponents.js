import styled, { css } from 'styled-components';
// 단순 변수의 형태가 아니라 여러
// 줄의 스타일 구분을 조건부로 설정해야 하는 경우 CSS 불러와야 함

// ### 반응형 디자인
// - 일반 CSS와 똑같이 media 쿼리(query) 사용
// - 컴포넌트마다 반복 힘듦 → 함수화하여 사용 ⇒ styled-components 메뉴얼에서 지공하는 유틸 함수 사용
//     - size 객체에 다라 자동으로 media 쿼리 함수 만들어 줌
//     - 참고 : ‘[https://styled-components.com/docs/advanced#media-templates](https://styled-components.com/docs/advanced#media-templates)’
const sizes = {
  desktop: 1024,
  tablet: 768
};
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, []);

// VSC 마켓플레이스에서 vscode-styled-components 설치하면 색상 가독성 높아짐

// props로 넣어 준 값을 직접 전달해 줄 수 있음
    // - 스타일 쪽에서 컴포넌트에게 전달된 props 값 참조할 수 있음
    // - background 값에 props 조회해서 props.color 값 사용,
    // color 값이 주어지지 않았을 때는 blue 기본 색상으로 설정
// & 문자로 Sass 처럼 자기 자신 선택 가능
// inverted 값이 true 일 때의 특정 스타일도 부여
const Box = styled.div`
  background: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;

  /* 기본적으로 가로 크리 1024px 에 가운데 정렬을 하고
      가로 크기가 작아짐에 따라 크기를 줄이고
      768px 미만이 되면 꽉 채웁니다. */
  width: 1024px;
  margin: 0 auto;
  /*
  @media (max-width: 1024px) {
    width: 768;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  */
  ${media.desktop`width: 768px;`}
  ${media.tablet`width: 100%;`}
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, .9);
  }

  ${props =>
    props.inverted &&
    css`
    background: none;
    border: 2px solid white;
    color: white;
    &:hover {
      background: white;
      color: black;
    }
  `};

  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponents = () => {
  <Box color="black">
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
};

export default StyledComponents;