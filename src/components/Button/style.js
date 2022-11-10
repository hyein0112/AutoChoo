import styled from '@emotion/styled';

export const ButtonStyle = styled.button`
  background-color: #fffafa;
  font-size: 1.5rem;
  width: 358px;
  height: 65px;
  border: 0;
  border-radius: 10px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.1s;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1);
    filter: brightness(96%);
  }
`;
