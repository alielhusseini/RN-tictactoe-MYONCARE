import { AppRegistry } from 'react-native';
import AppEntry from './AppEntry';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppEntry);
