'use client';

import { useState } from 'react';
import s from './Footer.module.scss';
import clsx from 'clsx';
import { useDataContext } from '../Provider';

const Footer = () => {
  const { showName, reset } = useDataContext();
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <footer className={s.footer}>
      <div className={s.cssAwesome}>
        CSS
        <br />
        IS
        <br />
        AWESOME
      </div>
      <div className={s.company}>
        <hr className={s.company__decor} />
        <p>nabthat</p>
        <hr className={s.company__decor} />
      </div>
      <div className={s.container}>
        <button
          className={s.showButton}
          onClick={() => setShowOptions(!showOptions)}
        >
          <span className={s.showButton__text}>Pokaż</span>
        </button>
        <div
          className={clsx(s.options, {
            [s.showOptions]: showOptions,
          })}
        >
          <button className={s.options__btn} onClick={reset}>
            Zresetuj ustawienia
          </button>
          <button className={s.options__btn} onClick={showName}>
            Pokaż dane osobowe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
