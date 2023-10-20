import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { colors } from "../../../infrastructure/theme/colors";

// export const AccountBackground = styled.ImageBackground.attrs({
//   source: require(""),
// })`
//   flex: 1;
//   background-color: #ddd;
//   align-items: center;
//   justify-content: center;
// `;

export const AccountScreenContainer = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.3);
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  width: 100%;
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const LoginContainer = styled.View`
  width: 90%;
  background-color: rgba(255, 255, 255, 0.3);
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const RegisterContainer = styled.View`
  width: 90%;
  background-color: rgba(255, 255, 255, 0.3);
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.space[2]};
  background: #3083dc;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const AuthTextInput = styled(TextInput).attrs({})``;

export const Title = styled(Text)`
  color: var(--Black, #333);
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
`;

export const Body = styled(Text)`
  color: #808080;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const ErrorContainer = styled.View`
  max-width: 300px
  align-items: center
  align-self: center
  margin-top: ${(props) => props.theme.space[2]}
  margin-bottom: ${(props) => props.theme.space[2]}
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px
  padding: ${(props) => props.theme.space[2]};
`;
