import { useContext, useEffect, useState } from 'react';
import { ClickContext } from '../../Context';
import * as S from './style';

const DrawMotion = ({
  img,
  menu,
  vegetable,
  nudleAndTteok,
  seafoodAndMeat,
  mushroom,
  tofu,
  tteokbokki,
}) => {
  const { isClicked } = useContext(ClickContext);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    setTimer(true);
  }, [isClicked]);

  useEffect(() => {
    let t = setTimeout(() => {
      setTimer(false);
    }, 600);
    return () => clearTimeout(t);
  }, [isClicked]);

  return timer ? (
    <S.Image>
      <img src={img} alt=""></img>
    </S.Image>
  ) : menu === '마라탕' ? (
    <div>
      {vegetable}
      <br />
      {nudleAndTteok}
      <br />
      {seafoodAndMeat}
      <br />
      {mushroom}
      <br />
      {tofu}
    </div>
  ) : (
    <div>{tteokbokki}</div>
  );
};

export default DrawMotion;
