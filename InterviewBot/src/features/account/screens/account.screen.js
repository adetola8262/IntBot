import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountScreenContainer,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  Body,
  AnimationWrapper,
} from "../components/account.styles";
import styled from "styled-components/native";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountScreenContainer>
      <AccountCover />
      {/* <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper> */}

      <Title>Get evaluated with more ease.</Title>
      <Body>Simplified assessments for enhanced student experience.</Body>

      <AccountContainer>
        <AuthButton
          icon="account-circle-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="account-circle-outline"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Sign Up
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountScreenContainer>
  );
};
