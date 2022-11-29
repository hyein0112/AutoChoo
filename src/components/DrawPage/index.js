import { useContext, useEffect, useState } from 'react';
import * as S from './style';
import * as C from '..';
import TteokbokkiImg from '../../assets/svg/tteokbokki.svg';
import MalaImg from '../../assets/svg/mala.svg';
import { ClickContext } from '../../Context';

const DrawPage = ({ message, menuKo, menuEn }) => {
  const [myMenuArr, setMyMenuArr] = useState([]);
  useEffect(() => {
    setMyMenuArr(JSON.parse(localStorage.getItem('1')));
  }, []);
  let storageArr = [];
  const { setIsClicked } = useContext(ClickContext);
  /* Menu List */
  const malaMenu = [
    {
      type: 'vegetable',
      name: '숙주',
    },
    {
      type: 'vegetable',
      name: '청경채',
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

  const [tteokbokki, setTteokbokki] = useState('');

  const [clickButton, setClickButton] = useState(false);
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

  const handleClickDrawButton = menu => {
    if (menu === 'malatang') {
      setVegetable(sortObj('vegetable'));
      setNudleAndTteok(sortObj('nudleAndTteok'));
      setSeafoodAndMeat(sortObj('seafoodAndMeat'));
      setMushroom(sortObj('mushroom'));
      setTofu(sortObj('tofu'));
    } else if (menu === 'tteokbokki') {
      setTteokbokki('아직 준비 중이에요!');
    }
    setClickButton(true);
    setIsClicked(prev => !prev);
  };
  const handleClickSaveButton = () => {
    storageArr = [vegetable, nudleAndTteok, seafoodAndMeat, mushroom, tofu];
    localStorage.setItem('1', JSON.stringify(storageArr));
    alert('메뉴를 저장했어요');
  };

  return (
    <S.BacgroundStyle>
      <C.Title description={message} />
      <S.DivStyle>
        {menuEn === 'malatang' ? (
          <S.Search
            href="https://www.google.com/search?q=%EB%A7%88%EB%9D%BC%ED%83%95&rlz=1C5CHFA_enKR982KR985&oq=%EB%A7%88%EB%9D%BC%ED%83%95&aqs=chrome..69i57j69i59l3j69i60j69i61l2.3859j0j9&sourceid=chrome&ie=UTF-8"
            target="brank"
          >
            마라탕이 무엇인지 모르시나요?
          </S.Search>
        ) : menuEn === 'tteokbokki' ? (
          <S.Search
            href="https://www.google.com/search?q=%EB%96%A1%EB%B3%B6%EC%9D%B4&rlz=1C5CHFA_enKR982KR985&oq=%EB%96%A1%EB%B3%B6%EC%9D%B4&aqs=chrome..69i57j69i59l2j69i60j69i61l2.1263j0j15&sourceid=chrome&ie=UTF-8"
            target="brank"
          >
            떡볶이가 무엇인지 모르시나요?
          </S.Search>
        ) : null}

        <S.TopingBox>
          <S.MenuBox>
            {menuKo === '메뉴' ? (
              <div>
                {myMenuArr[0]}
                <br />
                {myMenuArr[1]}
                <br />
                {myMenuArr[2]}
                <br />
                {myMenuArr[3]}
                <br />
                {myMenuArr[4]}
              </div>
            ) : null}
            {clickButton === false ? null : menuEn === 'malatang' ? (
              <C.DrawMotion
                img={MalaImg}
                menu={menuKo}
                vegetable={vegetable}
                nudleAndTteok={nudleAndTteok}
                seafoodAndMeat={seafoodAndMeat}
                mushroom={mushroom}
                tofu={tofu}
              />
            ) : (
              <C.DrawMotion
                img={TteokbokkiImg}
                menu={menuKo}
                tteokbokki={tteokbokki}
              />
            )}
          </S.MenuBox>
        </S.TopingBox>
        <S.ButtonBox>
          {menuKo === '메뉴' ? null : (
            <>
              <C.Button
                menu="토핑 뽑기"
                onClick={() => {
                  handleClickDrawButton(menuEn);
                }}
              />
              <C.Button
                menu="메뉴 저장"
                onClick={() => {
                  handleClickSaveButton();
                }}
              />
            </>
          )}
        </S.ButtonBox>
      </S.DivStyle>
    </S.BacgroundStyle>
  );
};

export default DrawPage;
