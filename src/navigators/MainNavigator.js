import React, { FC, useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import PlayersInformation from "../screens/PlayersInformation";
import GameSheet from "../screens/GameSheet";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="playersInformation" component={PlayersInformation} />
      <Stack.Screen name="gameSheet" component={GameSheet} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
