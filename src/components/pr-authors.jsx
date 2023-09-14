import { SimpleTag } from "@atlaskit/tag";
import TagGroup from "@atlaskit/tag-group";

const PRAuthors = ({ authors }) => {
  return (
      <TagGroup alignment="end">
          {
              authors.map( ({title, name}, index) =>
                  <SimpleTag key={index} text={`${title}: ${name}`} />
              )
          }
      </TagGroup>
  );
};

export default PRAuthors;
