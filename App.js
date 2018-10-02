import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import EntryScreen from './app/screens/EntryScreen';
import SettingsScreen from './app/screens/SettingsScreen';
import availableActivitiesScreen from './app/screens/AvailableActivitiesScreen';

const Navigation = createMaterialBottomTabNavigator({
  First: {screen: EntryScreen},
  Second: {screen: SettingsScreen},
  Third: {screen: availableActivitiesScreen}
});

export default Navigation;