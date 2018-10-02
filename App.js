import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import EntryScreen from './app/screens/EntryScreen';
import Settings from './app/screens/Settings';

const Navigation = createMaterialBottomTabNavigator({
  First: {screen: EntryScreen},
  Second: {screen: Settings}
});

export default Navigation;