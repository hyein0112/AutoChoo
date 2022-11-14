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

export const DivStyle = styled.div`
  width: 510px;
  height: 633px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto 0;
  @media screen and (max-width: 520px) {
    width: 98.08vw;
  }
  @media screen and (max-height: 850px) {
    height: 74.47vh;
  }
`;

export const TopingBox = styled.div`
  width: 510px;
  height: 530px;
  background: #fff;
  border: solid #e1caca 5px;
  box-sizing: border-box;
  border-radius: 20px;

  @media screen and (max-width: 520px) {
    width: 98.08vw;
  }

  @media screen and (max-height: 850px) {
    height: 62.35vh;
  }
  @media screen and (max-height: 540px) {
    height: 350px;
  }
`;

export const MenuBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Apple SD Gothic Neo', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, sans-serif;
  font-size: 1.5rem;
  line-height: 3rem;
`;
