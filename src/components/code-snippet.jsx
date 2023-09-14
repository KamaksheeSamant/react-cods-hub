import { CodeBlock } from "@atlaskit/code";
import { Flex, xcss } from "@atlaskit/primitives";
import Heading from "@atlaskit/heading";
import styled from "styled-components";

const CodeStyle = styled.div`
  flex: 1;
  padding: 5px;
`;

const CodeBlockWrapper = styled.div`
  span {
    max-height: 150px;
  }
`;

const headingStyles = xcss({
  marginBlock: "space.050",
});

const CodeSnippet = ({ code }) => {
  return (
    <Flex padding="space.050" backgroundColor="color.background.discovery">
      <CodeStyle>
        <Heading level="h500" xcss={headingStyles}>
          Before:
        </Heading>
        <CodeBlockWrapper>
          <CodeBlock
            language="jsx"
            text={code.before.codeSnippet}
            highlight={code.before.highlightedLines}
            shouldWrapLongLines={true}
          />
        </CodeBlockWrapper>
      </CodeStyle>
      <CodeStyle>
        <Heading level="h500" xcss={headingStyles}>
          After:
        </Heading>
        <CodeBlockWrapper>
          <CodeBlock
            language="jsx"
            text={code.after.codeSnippet}
            highlight={code.after.highlightedLines}
            shouldWrapLongLines={true}
          />
        </CodeBlockWrapper>
      </CodeStyle>
    </Flex>
  );
};

export default CodeSnippet;
