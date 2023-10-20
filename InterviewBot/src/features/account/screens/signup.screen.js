import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountScreenContainer,
  AccountCover,
  RegisterContainer,
  AuthButton,
  AuthTextInput,
  Title,
  ErrorContainer,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [matno, setMatNo] = useState("");
  const [department, setDepartment] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPssword, setRepeadedPassword] = useState("");
  const { signup, error, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountScreenContainer>
      <AccountCover />
      <Title>Create an account and get evaluated</Title>
      <RegisterContainer>
        <Spacer size="small">
          <AuthTextInput
            label="Name"
            value={name}
            textContentType="name"
            keyboardType="name"
            autoCapitalize="none"
            onChangeText={(u) => setName(u)}
          />
        </Spacer>
        <Spacer size="small">
          <AuthTextInput
            label="Uniben Email Address"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
          />
        </Spacer>
        <Spacer size="small">
          <AuthTextInput
            label="Matriculation Number"
            value={matno}
            textContentType="Matriculation Number"
            keyboardType="Matriculation Number"
            autoCapitalize="none"
            onChangeText={(u) => setMatNo(u)}
          />
        </Spacer>
        <Spacer size="small">
          <AuthTextInput
            label="Department"
            value={department}
            textContentType="department"
            keyboardType="department"
            autoCapitalize="none"
            onChangeText={(u) => setDepartment(u)}
          />
        </Spacer>
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
        <Spacer size="small">
          <AuthTextInput
            label="Repeat Password"
            value={repeatedPssword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(r) => setRepeadedPassword(r)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="email-outline"
              mode="contained"
              onPress={() =>
                signup(
                  name,
                  email,
                  matno,
                  department,
                  password,
                  repeatedPssword,
                ).then(() => navigation.navigate("Login"))
              }
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </RegisterContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountScreenContainer>
  );
};
