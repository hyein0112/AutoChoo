import * as S from './style';

const Button = ({ menu, onClick }) => {
  return <S.ButtonStyle onClick={onClick}>{menu}토핑 뽑기</S.ButtonStyle>;
};

export default Button;
