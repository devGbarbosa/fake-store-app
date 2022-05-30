/**
 * @format
 */

import { AppRegistry } from 'react-native'
import AppContainer from './src/App'
import { name as appName } from './app.json'
import codePush from "react-native-code-push";
import { ENV } from "./src/environment";


const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_SUSPEND,
  minimumBackgroundDuration: ENV === "production" ? 120 : 0
};​

const CodePushedApp = codePush(codePushOptions)(AppContainer);
AppRegistry.registerComponent(appName, () => CodePushedApp)
