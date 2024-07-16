'use client';

import { useDataContext } from '../Provider';
import s from './MainContent.module.scss';
import { useState } from 'react';

const generateUniqueNumber = (prevNum: number): number => {
  let num = Math.floor(Math.random() * 6);
  while (num === prevNum) {
    num = Math.floor(Math.random() * 6);
  }
  return num;
};

const MainContent = () => {
  const { player, setNewPlayer, addNewPlayer } = useDataContext();
  const [radio, setRadio] = useState<RadioOption>('0');
  const [prevNum, setPrevNum] = useState<number>(0);

  type RadioOption = '0' | '1' | 'random';

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setRadio(event.target.value as RadioOption);

  const handlePlayer = (action: 'set' | 'add') => {
    if (!radio) return;

    const newPlayer =
      radio === 'random' ? generateUniqueNumber(prevNum) : +radio;

    setPrevNum(newPlayer);

    action === 'set' ? setNewPlayer(newPlayer) : addNewPlayer(newPlayer);
  };

  const handleSetPlayer = () => handlePlayer('set');
  const handleAddPlayer = () => handlePlayer('add');

  return (
    <main className={s.main}>
      <header className={s.header}>
        <h1 className={s.header__title} id='main-title'>
          Nagłówek H1
        </h1>
      </header>
      <div className={s.mainWrapper}>
        <div className={s.sectionWrapper}>
          <h3 className={s.blockTitle}>Blok pierwszy</h3>
          <div className={s.radioButtonsContainer}>
            <label htmlFor='first'>
              <input
                type='radio'
                name='radio-button'
                id='first'
                value='0'
                checked={radio === '0'}
                onChange={handleRadioChange}
              />
              Opcja pierwsza
            </label>
            <label htmlFor='second'>
              <input
                type='radio'
                name='radio-button'
                id='second'
                value='1'
                onChange={handleRadioChange}
              />
              Opcja druga
            </label>
            <label htmlFor='random'>
              <input
                type='radio'
                name='radio-button'
                id='random'
                value='random'
                onChange={handleRadioChange}
              />
              Opcja losowa
            </label>
          </div>
        </div>
        <div className={s.sectionWrapper}>
          <h3 className={s.blockTitle}>Blok drugi</h3>
          <div className={s.buttonsContainer}>
            <button onClick={handleSetPlayer}>Zastąp</button>
            <button onClick={handleAddPlayer}>Doklej</button>
          </div>
        </div>
        <div className={s.sectionWrapper}>
          <h3 className={(s.resultBlock__title, s.blockTitle)}>
            Blok z długą nazwą która sama się przytnie
          </h3>
          <p className={s.resultBlock__description}>
            {player.map(({ text, id }) => (
              <span key={id}>
                {text} <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
