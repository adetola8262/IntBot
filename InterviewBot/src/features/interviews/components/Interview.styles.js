import styled from "styled-components/native";
import {
  Animated,
  Easing,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { colors } from "../../../infrastructure/theme/colors";

export const InterviewScheduleContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  space-between: ${(props) => props.theme.space[3]};
  padding: ${(props) => props.theme.space[3]};
`;

export const ViewContainer = styled.View`
  flex: 1;
  align-items: left;
  justify-content: flex-start;
  width: 23.375rem;
  height: 13.1875rem;
  flex-shrink: 0;
  padding: ${(props) => props.theme.space[3]};
`;

export const Title = styled(Text)`
  color: var(--Black, #333);
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
`;

export const InterviewText = styled(Text)`
  color: #aeaeae;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: left;
`;

export const InterviewButton = styled(Button).attrs({
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

export const InterviewChatContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  space-between: ${(props) => props.theme.space[3]};
  padding: ${(props) => props.theme.space[3]};
`;

export const ChatNavigationContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: left;
  width: 100%;
  height: 3.125rem;
  padding: 0rem 1rem;
  flex-shrink: 0;
`;

export const ChatArea = styled(ScrollView)`
  width: 100%;
  flex: 1;
  padding: 0rem 1rem;
  flex-shrink: 0;
  margin-top: 1rem;
`;

export const CenterImage = styled.Image`
  width: 25.875rem;
  height: 56rem;
`;

export const ReplyMessage = styled(Text)`
  width: 80%;
  height: 70px;
  color: #333;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
`;

export const MessageInput = styled.TextInput`
  width: 80%;
  height: 40px;
  border: 1px solid #ccc;
  padding: 10px;
  border: none;
  margin-top: 20px;
  color: #333;
`;

export const SendButton = styled.TouchableOpacity`
  background: #3083dc;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 5px;
`;
