import React, { useState, useEffect } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Search } from "../components/search.component";
import { getToken } from "../../../services/authentication/token.service";
import {
  InterviewScheduleContainer,
  ViewContainer,
  Title,
  InterviewText,
  InterviewButton,
} from "../components/Interview.styles";

export const InterviewScheduleScreen = ({ navigation }) => {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    getInterviews();
  }, []);

  const getInterviews = async () => {
    try {
      const token = await getToken();

      fetch("https://interview-server.cyclic.cloud/api/v1/chats/getChats", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Server response:", data);

          setInterviews(data.data.chats);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <InterviewScheduleContainer>
      <Spacer position="bottom" size="large">
        <Title>All your assessments at a glance</Title>
      </Spacer>

      <Search />

      <ViewContainer>
        {/* <InterviewText>Upcoming assessments</InterviewText> */}
        {interviews.map((interview) => (
          <Spacer position="bottom" size="large" key={interview.id}>
            <InterviewText onPress={() => navigation.navigate("InterviewChat")}>
              {interview.chatRoomName}
            </InterviewText>
          </Spacer>
        ))}
      </ViewContainer>

      <Spacer position="bottom" size="large">
        <InterviewButton onPress={() => navigation.navigate("InterviewChat")}>
          Go to Interview Chat
        </InterviewButton>
      </Spacer>
    </InterviewScheduleContainer>
  );
};
