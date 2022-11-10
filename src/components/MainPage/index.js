/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import * as C from '../';

const MainPage = () => {
  return (
    <div
      css={css`
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
      `}
    >
      <C.Title description={'오늘 넣을 토핑을 추천해드려요!'} />
      <div
        css={css`
          height: 70vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <div
          css={css`
            width: 358px;
            height: 221px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          `}
        >
          <Link to="/malatang">
            <C.Button menu="마라탕 " />
          </Link>

          <Link to="/tteokbokki">
            <C.Button menu="떡볶이 " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
