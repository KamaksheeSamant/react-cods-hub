import React from "react";

import Avatar from "@atlaskit/avatar";
import Heading from "@atlaskit/heading";
import Tag from "@atlaskit/tag";
import TagGroup from "@atlaskit/tag-group";
import BitbucketPullrequestsIcon from "@atlaskit/icon/glyph/bitbucket/pullrequests";
import MoreIcon from "@atlaskit/icon/glyph/more";
import { AtlassianIcon } from "@atlaskit/logo";
import Lozenge from "@atlaskit/lozenge";
import { Box, Inline, Stack, xcss } from "@atlaskit/primitives";
import { CodeBlock } from "@atlaskit/code";
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

const containerStyles = xcss({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "elevation.surface.raised",
  padding: "space.150",
  margin: "space.1000",
  transition: "200ms",
  borderRadius: "border.radius.100",
  boxShadow: "elevation.shadow.raised",
  ":hover": {
    backgroundColor: "elevation.surface.hovered",
  },
});

const inlineStyles = xcss({
  display: "flex",
  alignItems: "center",
});

const extraInfoStyles = xcss({
  display: "flex",
  justifyContent: "space-between",
  paddingBlock: "space.050",
});

const boxStyles = xcss({
  display: "flex",
  justifyContent: "space-between",
  borderColor: "color.border.discovery",
  borderStyle: "solid",
  borderRadius: "border.radius",
  borderWidth: "border.width",
});

const CodeStyle = styled.div`
  flex: 1;
  padding: 10px;
`;

export default function App() {
  return (
    <Box xcss={containerStyles}>
      <TagGroup alignment="start">
        <Tag text="Bitbucket" />
        <Tag text="Compass" />
        <Tag text="Confluence" />
        <Tag text="Jira" />
        <Tag text="Jira Service Management" />
        <Tag text="Jira Software" />
        <Tag text="Jira Work Management" />
        <Tag text="Opsgenie" />
        <Tag text="Statuspage" />
        <Tag text="Trello" />
      </TagGroup>
      <Stack space="space.100">
        <Box
          padding="space.400"
          backgroundColor="color.background.discovery"
          xcss={boxStyles}
        >
          <CodeStyle>
            <Box as="span">Before</Box>
            <CodeBlock
              language="jsx"
              text={exampleCodeBlock}
              highlight="2,5-7"
            />
          </CodeStyle>
          <CodeStyle>
            <Box as="span">After</Box>
            <CodeBlock
              language="jsx"
              text={exampleCodeBlock}
              highlight="2,5-7"
            />{" "}
          </CodeStyle>
          {/*
           */}
        </Box>
        <Box as="span">
          Dropdown menu items in Modal are not accessible to keyboard/screen
          readers in Safari
        </Box>
        <Box as="span">
          <Lozenge appearance="new">Accelerate Cloud Accessibility</Lozenge>
        </Box>
        <Box xcss={extraInfoStyles}>
          <Box xcss={inlineStyles}>
            <AtlassianIcon appearance="brand" size="small" label="" />
            <Heading level="h300">DSP-9786</Heading>
          </Box>
          <Inline space="space.100" alignBlock="center">
            <BitbucketPullrequestsIcon size="small" label="" />
            <MoreIcon size="small" label="" />
            <Avatar size="small" />
          </Inline>
        </Box>
      </Stack>
    </Box>
  );
}
