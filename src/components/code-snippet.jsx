import { CodeBlock } from "@atlaskit/code";
import { Flex, xcss } from "@atlaskit/primitives";
import Heading from "@atlaskit/heading";
import styled from "styled-components";

const beforeCodeBlock = `
private List<String> filterQuestionId(List<String> questionIds, List<String> questionOverrides) {
  return  questionIds.stream()
          .filter(questionId -> questionOverrides.stream().noneMatch(questionOverride -> questionId.equals(questionOverride))
          .collect(Collectors.toList());
}
`;
const afterCodeBlock = `
private List<String> filterQuestionId(List<String> questionIds, Set<String> questionOverrides) {
  return  questionIds.stream()
          .filter(questionId -> !questionOverrides.contains(questionId))
          .collect(Collectors.toList());
}
`;

const CodeStyle = styled.div`
  flex: 1;
  padding: 5px;
`;

const headingStyles = xcss({
  marginBlock: "space.050",
});

// const boxStyles = xcss({
//   display: "flex",
//   justifyContent: "space-between",
//   borderColor: "color.border.discovery",
//   borderStyle: "solid",
//   borderRadius: "border.radius",
//   borderWidth: "border.width",
// });
const CodeSnippet = () => {
  return (
    <Flex padding="space.050" backgroundColor="color.background.discovery">
      <CodeStyle>
        <Heading level="h500" xcss={headingStyles}>
          Before:
        </Heading>
        <CodeBlock
          language="jsx"
          text={beforeCodeBlock}
          highlight="3-4"
          shouldWrapLongLines={true}
        />
      </CodeStyle>
      <CodeStyle>
        <Heading level="h500" xcss={headingStyles}>
          After:
        </Heading>
        <CodeBlock
          language="jsx"
          text={afterCodeBlock}
          highlight="3-4"
          shouldWrapLongLines={true}
        />
      </CodeStyle>
    </Flex>
  );
};

export default CodeSnippet;
