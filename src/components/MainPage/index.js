/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import * as C from '../';
import * as S from './style';

const MainPage = () => {
  return (
    <S.BacgroundStyle>
      <C.Title description={'오늘 넣을 토핑을 추천해드려요!'} />
      <div
        css={css`
          height: 70vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <S.ButtonBox>
          <Link to={`/malatang`}>
            <C.Button menu="마라탕 토핑 뽑기" />
          </Link>

          <Link to={`/tteokbokki`}>
            <C.Button menu="떡볶이 토핑 뽑기" />
          </Link>
          <Link to={`/mymenu`}>
            <C.Button menu="내 메뉴 보기" />
          </Link>
        </S.ButtonBox>
      </div>
    </S.BacgroundStyle>
  );
};

export default MainPage;
