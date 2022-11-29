import * as S from './style';

const Button = ({ menu, onClick }) => {
  return <S.ButtonStyle onClick={onClick}>{menu}</S.ButtonStyle>;
};

export default Button;
