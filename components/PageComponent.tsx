import { HStack, Text } from "@chakra-ui/react";
interface HeadingProps {
  text: string;
  alignment?: "center" | "left" | "right" | "justify";
}

export function Heading({ text, alignment }: HeadingProps) {
  return (
    <HStack>
      <Text
        width={"full"}
        color={"lightgrey"}
        fontSize={"9xl"}
        fontWeight={"bold"}
        textAlign={alignment}
      >
        <span>{text}</span>
      </Text>
    </HStack>
  );
}
