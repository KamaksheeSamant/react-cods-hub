import { SimpleTag } from "@atlaskit/tag";
import { Flex, xcss } from "@atlaskit/primitives";
import TagGroup from "@atlaskit/tag-group";

const flexStyle = xcss({
  paddingLeft: "space.025",
  flex: 1,
});

const PRInfo = ({ prInfo }) => {
  return (
    <Flex alignItems="center" xcss={flexStyle}>
      <TagGroup alignment="end">
        {prInfo.map(({ title, value }, index) => (
          <SimpleTag key={index} text={`${title}: ${value}`} />
        ))}
      </TagGroup>
    </Flex>
  );
};

export default PRInfo;
