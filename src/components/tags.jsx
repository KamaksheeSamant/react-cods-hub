import { SimpleTag } from "@atlaskit/tag";
import TagGroup from "@atlaskit/tag-group";
import { Flex } from "@atlaskit/primitives";

const Tags = () => {
  return (
    <Flex>
      <TagGroup alignment="start">
        <SimpleTag text="TypeScript" />
        <SimpleTag text="Organisation" />
        <SimpleTag text="Containerization" />
        <SimpleTag text="Avoid Vulnerable Code" />
      </TagGroup>
      <TagGroup alignment="end">
        <SimpleTag text="PR Author: Scott Farquhar" />
        <SimpleTag text="Comment Author: Kamakshee Samant" />
      </TagGroup>
    </Flex>
  );
};

export default Tags;
