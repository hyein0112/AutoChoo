import * as S from './style';
import * as C from '..';

const DrawPage = ({ menu }) => {
  return (
    <S.BacgroundStyle>
      <C.Title description={`${menu}에 넣을 토핑을 추천해드려요!`} />
      <S.DivStyle>
        <S.TopingBox />
        <C.Button />
      </S.DivStyle>
    </S.BacgroundStyle>
  );
};

export default DrawPage;
