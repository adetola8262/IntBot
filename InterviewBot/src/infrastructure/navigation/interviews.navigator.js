import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { InterviewScheduleScreen } from "../../features/interviews/screens/InterviewScheduleScreen";
import { InterviewChatScreen } from "../../features/interviews/screens/InterviewChatScreen";

const InterviewStack = createStackNavigator();

export const InterviesNavigator = () => {
  return (
    <InterviewStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <InterviewStack.Screen
        name="InterviewSchedule"
        component={InterviewScheduleScreen}
      />
      <InterviewStack.Screen
        name="InterviewChat"
        component={InterviewChatScreen}
      />
    </InterviewStack.Navigator>
  );
};
