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
  align-items: flex-start;
  justify-content: flex-start;
  width: 23.375rem;
  height: 13.1875rem;
  flex-shrink: 0;
  padding: ${(props) => props.theme.space[3]};
`;

export const Title = styled(Text)`
  color: #333;
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
  align-items: flex-start;
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

export const ChatArea = styled(ScrollView)`
  flex: 1;
  margin-top: 1rem;
  width: 100%;
  padding: 1rem;
`;

export const CenterImage = styled.Image`
  width: 100%;
  height: auto; /* Adjust height to maintain aspect ratio */
  margin-bottom: 1rem; /* Add space below CenterImage */
`;

export const ReplyMessage = styled(Text)`
  width: 100%; /* Use full width */
  height: auto; /* Allow dynamic height */
  color: #333;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 0.5rem; /* Add space between ReplyMessage and other components */
`;

export const MessageInput = styled.TextInput`
  width: 100%; /* Use full width */
  height: 40px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 1rem; /* Add space above MessageInput */
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
  margin-top: 1rem; /* Add space above SendButton */
  border-radius: 5px;
`;
