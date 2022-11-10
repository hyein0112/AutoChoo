/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as I from '../../assets/svg';

const Title = ({ description }) => {
  return (
    <div
      css={css`
        margin-top: 70px;
      `}
    >
      <I.TitleLogo />
      <S.Description>{description}</S.Description>
    </div>
  );
};

export default Title;
