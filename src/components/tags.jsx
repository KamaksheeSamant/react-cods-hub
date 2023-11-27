import { Flex, xcss } from "@atlaskit/primitives";
import { SimpleTag } from "@atlaskit/tag";
import TagGroup from "@atlaskit/tag-group";

const flexStyle = xcss({
  paddingLeft: "space.025",
  flex: 1,
});

const Tags = ({ tags }) => {
  return (
    <Flex alignItems="center" xcss={flexStyle}>
      <span>Tags:: </span>
      <TagGroup alignment="start">
        {tags.map((tag, index) => (
          <SimpleTag key={index} text={tag} />
        ))}
      </TagGroup>
    </Flex>
  );
};

export default Tags;
