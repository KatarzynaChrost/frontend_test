'use client';

import Link from 'next/link';
import s from './Header.module.scss';
import { FaHtml5 } from 'react-icons/fa';
import { useDataContext } from '../Provider';

const Header = () => {
  const { isNameVisible } = useDataContext();

  return (
    <header className={s.header}>
      <Link className={s.logo} href='/'>
        <FaHtml5 size={72} />
      </Link>
      <h2 className={s.title}>
        Zadanie <b>rekrutacyjne</b>
        {isNameVisible && <p>Katarzyna Chróst</p>}
      </h2>
    </header>
  );
};

export default Header;
