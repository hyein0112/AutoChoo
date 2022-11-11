/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import * as S from './style';
import * as I from '../../assets/svg';

const Title = ({ description }) => {
  return (
    <div
      css={css`
        margin-top: 70px;

        @media screen and (max-height: 900px) {
          margin-top: 7.78vh;
        }
      `}
    >
      <Link to="/">
        <I.TitleLogo />
      </Link>
      <S.Description>{description}</S.Description>
    </div>
  );
};

export default Title;
