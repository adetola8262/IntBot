import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { InterviesNavigator } from "./interviews.navigator";
import { InterviewContextProvider } from "../../services/interview/interview.context";

const Drawer = createDrawerNavigator();

export const AppNavigator = () => {
  return (
    <InterviewContextProvider>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={InterviesNavigator} />
      </Drawer.Navigator>
    </InterviewContextProvider>
  );
};
