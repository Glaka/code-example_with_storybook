import React from "react";

import Typography, { H1, H2, H3, H4, H5, Body, BodySmall, Label, Caption } from ".";

export const All = () => {
  return (
    <div>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <Body>Body</Body>
      <BodySmall>BodySmall</BodySmall>
      <Label>Label</Label>
      <Caption>Caption</Caption>
    </div>
  );
};

export default {
  component: Typography,
  title: "Typography",
};
