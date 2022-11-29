import styled from '@emotion/styled';

export const BacgroundStyle = styled.div`
  width: 700px;
  height: 100vh;
  margin: 0 auto;
  background-color: #ffeaea;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0px 4px 10px 5px rgba(34, 0, 0, 0.21);

  @media screen and (max-width: 700px) {
    width: 100vw;
  }
`;

export const ButtonBox = styled.div`
  width: 358px;
  height: 301px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
