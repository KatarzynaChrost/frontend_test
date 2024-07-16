'use client';

import {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

import data from '../../data/content.json';

interface ContextProps {
  showName: () => void;
  player: Player[];
  reset: () => void;
  isNameVisible: boolean;
  setNewPlayer: (id: number) => void;
  addNewPlayer: (id: number) => void;
}

type Player = {
  id: number;
  text: string;
};

const AppContext = createContext<ContextProps>({} as ContextProps);

const Provider = ({ children }: { children: ReactNode }) => {
  const [player, setPlayer] = useState<Player[]>([data[0]]);
  const [isNameVisible, setIsNameVisible] = useState<boolean>(false);

  useEffect(() => {
    const storedPlayer = localStorage.getItem('player');

    if (storedPlayer) {
      setPlayer(JSON.parse(storedPlayer));
    }
  }, []);

  const showName = () => {
    setIsNameVisible(true);
  };

  const reset = () => {
    setIsNameVisible(false);
    setPlayer([data[0]]);
    localStorage.clear();
  };

  const addNewPlayer = (id: number) => {
    setPlayer((prev: Player[]) => {
      const updatedPlayers = [...prev, data[id]];
      localStorage.setItem('Player', JSON.stringify(updatedPlayers));
      return updatedPlayers;
    });
  };
  
  const setNewPlayer = (id: number) => {
    const newPlayer = [data[id]];
    setPlayer(newPlayer);
    localStorage.setItem('Player', JSON.stringify(newPlayer));
  };

  return (
    <AppContext.Provider
      value={{
        player,
        addNewPlayer,
        showName,
        isNameVisible,
        reset,
        setNewPlayer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

export const useDataContext = () => useContext(AppContext);
