import { Inline } from "@atlaskit/primitives";
import { BiLike } from "react-icons/bi";
import Badge from "@atlaskit/badge";
import { BiDislike } from "react-icons/bi";
import { IoTrashOutline } from "react-icons/io5";
// import { GiCardDiscard } from "react-icons/gi";
import { GoCommentDiscussion } from "react-icons/go";
import { xcss } from "@atlaskit/primitives";
import { styled } from "styled-components";

const inlineStyles = xcss({
  display: "flex",
  alignItems: "center",
  width: "100%",
});

const Reaction = styled.div`
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

const Reactions = () => {
  return (
    <Inline xcss={inlineStyles}>
      <Reaction>
        <BiLike style={iconStyles} title="Like" />
        <Badge appearance="primary">{5}</Badge>
      </Reaction>
      <Reaction>
        <BiDislike style={iconStyles} title="Dislike" />
        <Badge appearance="primary">{0}</Badge>
      </Reaction>
      <Reaction>
        <IoTrashOutline style={iconStyles} title="Discard" />
      </Reaction>
      <Reaction>
        <GoCommentDiscussion style={iconStyles} title="Discuss" />
      </Reaction>
    </Inline>
  );
};

export default Reactions;
