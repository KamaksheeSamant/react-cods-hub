import { CodeBlock } from "@atlaskit/code";
import { Flex, xcss } from "@atlaskit/primitives";
import Heading from "@atlaskit/heading";
import {styled} from "styled-components";

const HeaderContainer = styled.div`
  width: 48%;
`;
const headingStyles = xcss({
    marginBlock: "space.050",
});

const CodeWrapper = xcss({
    " > span": {
        width: "48%"
    }
});

const CodeSnippet = ({ code }) => {
  return (
      <>
          <Flex justifyContent="space-between" >

          <HeaderContainer>
              <Heading level="h500" xcss={headingStyles}>
                Before:
              </Heading>
          </HeaderContainer>
          <HeaderContainer>
              <Heading level="h500" xcss={headingStyles}>
                After:
              </Heading>
          </HeaderContainer>
          </Flex>

          <Flex justifyContent="space-between" xcss={CodeWrapper}>
              <CodeBlock
                language="jsx"
                text={code.before.codeSnippet}
                highlight={code.before.highlightedLines}
                shouldWrapLongLines={true}
              />
              <CodeBlock
                language="jsx"
                text={code.after.codeSnippet}
                highlight={code.after.highlightedLines}
                shouldWrapLongLines={true}
              />
        </Flex>
    </>
  );
};

export default CodeSnippet;
