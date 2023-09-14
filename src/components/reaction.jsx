import React from "react";
import Badge from "@atlaskit/badge";
import { styled } from "styled-components";
import { BiDislike, BiLike } from "react-icons/bi";
import { BiArchiveIn } from "react-icons/bi";
import { GoCommentDiscussion } from "react-icons/go";

const ReactionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 15px;
`;

const iconStyles = {
  height: "25px",
  width: "25px",
  color: "#5E6C84",
};

const getIcon = (title) => {
  switch (title) {
    case "like":
      return <BiLike style={iconStyles} title={title} />;
    case "dislike":
      return <BiDislike style={iconStyles} title={title} />;
    case "discard":
      return <BiArchiveIn style={iconStyles} title={title} />;
    case "discuss":
      return <GoCommentDiscussion style={iconStyles} title={title} />;
  }
};

const Reaction = ({ reaction }) => {
  const { title, quantity } = reaction;

  return (
    <>
      <ReactionWrapper>
        {getIcon(title)}
        {<Badge appearance="primary">{quantity}</Badge>}
      </ReactionWrapper>
    </>
  );
};

export default Reaction;
