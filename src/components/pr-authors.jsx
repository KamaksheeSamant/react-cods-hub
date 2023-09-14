import { SimpleTag } from "@atlaskit/tag";
import TagGroup from "@atlaskit/tag-group";

const PRAuthors = ({ authors }) => {
  return (
      <TagGroup alignment="end">
          {
              authors.map( (author, index) =>
                  <SimpleTag key={index} text={author} />
              )
          }
      </TagGroup>
  );
};

export default PRAuthors;
