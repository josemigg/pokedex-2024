import { useEffect } from 'react';

import './pokemon-list.css';

export const ComponentChorra = ({ contador }: { contador: number }) => {
  useEffect(() => {
    console.log('me he montado');
  }, []);

  console.log('me he renderizado');
  return <div className="">Esto es un component chorra, contador: {contador}</div>;
};
