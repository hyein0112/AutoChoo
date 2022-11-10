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

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const ButtonBox = styled.div`
  width: 358px;
  height: 221px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
