import { CodeBlock } from "@atlaskit/code";
import { Flex, xcss } from "@atlaskit/primitives";
import Heading from "@atlaskit/heading";
import styled from "styled-components";

const exampleCodeBlock = `class HelloMessage extends React.Component {
    import { Box } from '@atlaskit/primitives'

    render() {
      return (
        <Box>
          Hello {this.props.name}
        </Box>
      );
    }
  }
  ReactDOM.render(
    <HelloMessage name="Taylor" />,
    mountNode
  );`;

const CodeStyle = styled.div`
  flex: 1;
  padding: 5px;
`;

const headingStyles = xcss({
  marginBlock: "space.050",
});

const boxStyles = xcss({
  display: "flex",
  justifyContent: "space-between",
  borderColor: "color.border.discovery",
  borderStyle: "solid",
  borderRadius: "border.radius",
  borderWidth: "border.width",
});
const CodeSnippet = () => {
  return (
    <Flex
      padding="space.050"
      backgroundColor="color.background.discovery"
    >
      <CodeStyle>
        <Heading level="h500" xcss={headingStyles}>
          Before:
        </Heading>
        <CodeBlock
          language="jsx"
          text={exampleCodeBlock}
          highlight="2,5-7"
          shouldWrapLongLines={true}
        />
      </CodeStyle>
      <CodeStyle>
        <Heading level="h500" xcss={headingStyles}>
          After:
        </Heading>
        <CodeBlock
          language="jsx"
          text={exampleCodeBlock}
          highlight="2,5-7"
          shouldWrapLongLines={true}
        />
      </CodeStyle>
    </Flex>
  );
};

export default CodeSnippet;
