import React, { useState, useContext, createContext, useEffect } from "react";

import { getInterviews, getInterview } from "./interview.service";

export const InterviewContext = createContext();

export const InterviewContextProvider = ({ children }) => {
  const [interviews, setInterviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const search = (keyword) => {
    setKeyword(keyword);
  };

  useEffect(() => {
    setIsLoading(true);
    getInterviews()
      .then((interviews) => {
        setInterviews(interviews);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const interviewsContext = {
    interviews,
    isLoading,
    error,
    keyword,
    search,
    searchKeyword,
    setSearchKeyword,
  };

  return (
    <InterviewContext.Provider value={interviewsContext}>
      {children}
    </InterviewContext.Provider>
  );
};
