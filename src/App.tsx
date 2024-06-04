import { Outlet } from 'react-router-dom';
import { Menu } from './components/menu/Menu';
import { UserContextProvider } from './contexts/UserContextProvider';
import { UserInfo } from './UserInfo';

export const App = () => {
  const styles = { border: 'black', background: 'red' };
  const styles1 = { border: '1px solid #fff' };

  const result = { ...styles1, ...styles };
  /*
   { border: '1px solid #fff', background: 'red' }
  */

  return (
    <div>
      <UserContextProvider>
        <div style={{ ...styles, ...styles1 }}>
          <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
          <Menu />
        </div>

        <UserInfo />
        <div>
          <pre>{JSON.stringify({ ...styles1, ...styles }, null, 2)}</pre>
        </div>
      </UserContextProvider>
    </div>
  );
};
