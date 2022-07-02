import styled, { css } from 'styled-components';

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