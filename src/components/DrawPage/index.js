/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import * as S from './style';
import * as C from '..';

const DrawPage = ({ menuKo, menuEn }) => {
  /* Menu List */
  const malaMenu = [
    {
      type: 'vegetable',
      name: '숙주',
    },
    {
      type: 'vegetable',
      name: '콩나물',
    },
    {
      type: 'vegetable',
      name: '배추',
    },
    {
      type: 'vegetable',
      name: '양배추',
    },
    {
      type: 'vegetable',
      name: '감자',
    },
    {
      type: 'nudleAndTteok',
      name: '옥수수면',
    },
    {
      type: 'nudleAndTteok',
      name: '뉴진면',
    },
    {
      type: 'nudleAndTteok',
      name: '중국당면',
    },
    {
      type: 'nudleAndTteok',
      name: '분모자',
    },
    {
      type: 'nudleAndTteok',
      name: '당면',
    },
    {
      type: 'nudleAndTteok',
      name: '치즈떡',
    },
    {
      type: 'nudleAndTteok',
      name: '고구마떡',
    },
    {
      type: 'seafoodAndMeat',
      name: '비엔나',
    },
    {
      type: 'seafoodAndMeat',
      name: '스모크햄',
    },
    {
      type: 'seafoodAndMeat',
      name: '맛살',
    },
    {
      type: 'seafoodAndMeat',
      name: '어묵',
    },
    {
      type: 'mushroom',
      name: '백목이버섯',
    },
    {
      type: 'mushroom',
      name: '흑목이버섯',
    },
    {
      type: 'mushroom',
      name: '팽이버섯',
    },
    {
      type: 'mushroom',
      name: '느타리버섯',
    },
    {
      type: 'mushroom',
      name: '새송이버섯',
    },
    {
      type: 'tofu',
      name: '건두부',
    },
    {
      type: 'tofu',
      name: '푸주',
    },
    {
      type: 'tofu',
      name: '얼린두부',
    },
    {
      type: 'tofu',
      name: '유부',
    },
  ];

  /* Malatang State */
  const [vegetable, setVegetable] = useState('');
  const [nudleAndTteok, setNudleAndTteok] = useState('');
  const [seafoodAndMeat, setSeafoodAndMeat] = useState('');
  const [mushroom, setMushroom] = useState('');
  const [tofu, setTofu] = useState('');

  const sortObj = type => {
    let sort = malaMenu
      .filter(x => x.type === type)
      .sort(() => Math.random() - 0.5);

    if (type === 'vegetable' || type === 'nudleAndTteok') {
      sort = `${sort[0].name}, ${sort[1].name}`;
    } else {
      sort = `${sort[0].name}`;
    }

    return sort;
  };

  const handleClickButton = menu => {
    if (menu === 'malatang') {
      setVegetable(sortObj('vegetable'));
      setNudleAndTteok(sortObj('nudleAndTteok'));
      setSeafoodAndMeat(sortObj('seafoodAndMeat'));
      setMushroom(sortObj('mushroom'));
      setTofu(sortObj('tofu'));
    } else if (menu === 'tteokbokki') {
      alert('다음 업데이트를 기대해주세요!');
    }
    setClickButton(true);
  };

  const [clickButton, setClickButton] = useState(false);

  return (
    <S.BacgroundStyle>
      <C.Title description={`${menuKo}에 넣을 토핑을 추천해드려요!`} />
      <S.DivStyle>
        <S.TopingBox>
          <S.MenuBox>
            {clickButton === false ? null : (
              <div>
                {vegetable} <br />
                {nudleAndTteok} <br />
                {seafoodAndMeat} <br />
                {mushroom} <br />
                {tofu}
              </div>
            )}
          </S.MenuBox>
        </S.TopingBox>
        <C.Button
          onClick={() => {
            handleClickButton(menuEn);
          }}
        />
      </S.DivStyle>
    </S.BacgroundStyle>
  );
};

export default DrawPage;
