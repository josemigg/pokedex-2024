import { Outlet } from 'react-router-dom';
import { Menu } from './components/menu/Menu';
import { UserContextProvider } from './contexts/UserContextProvider';
import { UserInfo } from './UserInfo';

export const App = () => {
  return (
    <div>
      <UserContextProvider>
        <div>
          <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
          <Menu />
        </div>
        <UserInfo />
        <div>
          <Outlet />
        </div>
      </UserContextProvider>
    </div>
  );
};
