import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { InterviewContext } from "../../../services/interview/interview.context";

const SearchContainer = styled.View.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  padding: ${(props) => props.theme.space[3]};
  display: flex;
  width: 23.375rem;
  padding: 0.75rem 1rem;
  justify-content: space-between;
  align-items: center;
`;

export const Search = () => {
  const { keyword, search } = useContext(InterviewContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        // icon={isFavouritesToggled ? "heart" : "heart-outline"}
        // onIconPress={onFavouritesToggle}
        placeholder="Search for an Interview"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
