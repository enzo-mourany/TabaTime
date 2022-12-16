import {IRouteProps} from '../lib/RouteProp';
import HomeScreen from '../screens/HomeScreen';
import CountdownScreen from '../screens/CountdownScreen';

const routes: IRouteProps[] = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'Countdown',
    component: CountdownScreen,
  },
];

export default routes;
