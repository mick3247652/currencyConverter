import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import CurrencyList from "../screens/CurrencyList";

const rootStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
        header: () => null,
    }
  },
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({navigation}) => ({
        headerTitle: navigation.state.params.title,
    }),
  }
}, {
    mode: 'modal',
});

const App = createAppContainer(rootStack)

export default App
