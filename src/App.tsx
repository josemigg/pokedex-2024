import { Outlet, NavLink } from 'react-router-dom';
import { Menu } from './components/menu/Menu';
import { UserContextProvider } from './contexts/UserContextProvider';
import { UserInfo } from './UserInfo';
import { createWorkout } from './test-factories/workout.factories';

export const App = () => {
  console.log(createWorkout({ name: 'Test' }));
  console.log(createWorkout({ series: 200 }));
  console.log(createWorkout());
  console.log(createWorkout());
  console.log(createWorkout({ series: 200 }));
  console.log(createWorkout({ series: 200 }));

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
