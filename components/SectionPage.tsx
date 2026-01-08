import React from "react";
import { Heading } from "./PageComponent";
import { Container } from "@chakra-ui/react";

export default function SectionPage({
  title,
  children,
  ...props
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Heading text={title} alignment="center" />
      <Container {...props}>{children}</Container>
    </div>
  );
}
