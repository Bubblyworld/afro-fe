import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MapScreen from "./src/screens/map.js";
import HomeScreen from "./src/screens/home.js";
import rootReducer from "./src/redux/reducers.js";

const Stack = createStackNavigator();
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="map" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
