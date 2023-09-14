import { SimpleTag } from "@atlaskit/tag";
import TagGroup from "@atlaskit/tag-group";

const Tags = ({ tags }) => {
  return (
      <TagGroup alignment="start">
          {
              tags.map( (tag, index) =>
                  <SimpleTag key={index} text={tag} />
              )
          }
      </TagGroup>
  );
};

export default Tags;
