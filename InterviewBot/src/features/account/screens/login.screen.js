import React, { useState, useContext } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountScreenContainer,
  AccountCover,
  LoginContainer,
  AuthButton,
  AuthTextInput,
  Title,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [matno, setMatNo] = useState("");
  const [password, setPassword] = useState("");
  const { authenticate } = useContext(AuthenticationContext);

  return (
    <AccountScreenContainer>
      <AccountCover />
      <Title>Welcome back, get evaluated easily.</Title>
      <LoginContainer>
        <AuthTextInput
          label="Matriculation Number"
          value={matno}
          textContentType="matno"
          keyboardType="mat-number"
          autoCapitalize="none"
          onChangeText={(u) => setMatNo(u)}
        />
        <Spacer size="small">
          <AuthTextInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => authenticate(matno, password)}
          >
            Login
          </AuthButton>
        </Spacer>
      </LoginContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountScreenContainer>
  );
};
