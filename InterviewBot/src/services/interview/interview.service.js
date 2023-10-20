import React from "react";
import { mock } from "./mock";

export const getInterviews = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mock);
    }, 2000);
  });
};
export const getInterview = (id) => {
  return new Promise((resolve, reject) => {
    const interview = mock.find((interview) => interview.id === id);
    setTimeout(() => {
      resolve(interview);
    }, 2000);
  });
};
