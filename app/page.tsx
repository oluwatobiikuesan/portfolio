"use client";

import { Container, HStack, Spacer, Tag, Text, VStack } from "@chakra-ui/react";
import Header from "@/components/header";
import { FaReact, FaNodeJs, FaAws, FaDatabase } from "react-icons/fa";
import { SiTestinglibrary } from "react-icons/si";
import { CgDesignmodo } from "react-icons/cg";
import { useState } from "react";
import { BigCircleButton } from "@/components/button";
import { BiArrowToRight } from "react-icons/bi";
import { Heading } from "@/components/PageComponent";

const paragraphs = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
];

const techincalSkillLibrary = [
  {
    name: "Frontend Skills",
    icon: <FaReact color="black" />,
    index: false,
    stack: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  {
    name: "Backend Skills",
    icon: <FaNodeJs color="black" />,
    index: true,
    stack: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "MongoDB"],
  },
  {
    name: "Cloud Skills",
    icon: <FaAws color="black" />,
    index: false,
    stack: ["AWS", "DigitalOcean", "Heroku", "Netlify", "Vercel"],
  },
  {
    name: "Database Skills",
    icon: <FaDatabase color="black" />,
    stack: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Firebase"],
    index: false,
  },
  {
    name: "Design Skills",
    icon: <CgDesignmodo color="black" />,
    index: false,
    stack: ["Figma", "Adobe XD", "Canva", "InVision", "Framer Motion"],
  },
  {
    name: "Testing Skills",
    icon: <SiTestinglibrary color="black" />,
    index: false,
    stack: ["Jest", "React Testing Library", "Cypress", "Enzyme", "Mocha"],
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [renderSkill, setRenderSkill] = useState(techincalSkillLibrary[index]);

  const handlSkillChange = (index: number) => {
    alert(index);
    setIndex(index);
    setRenderSkill(techincalSkillLibrary[index]);
  };

  return (
    <>
      <Header />
      <Spacer height={"50px"} />
      <Container alignItems={"center"} justifyContent={"center"}>
        <VStack alignItems={"center"} justifyContent={"center"}>
          <Heading text="Hi, I am Oluwatobi" />
          <Text
            width={"50%"}
            textAlign={"center"}
            color={"black"}
            fontSize={"0.8rem"}
            fontWeight={"normal"}
          >
            Hi there, I'm Oluwatobi Ikuesan, a frontend developer based in
            Lagos, Nigeria. I'm passionate about creating beautiful and
            user-friendly websites.
          </Text>
          <Spacer height={"200px"} />
          <HStack>
            <Tag.Root
              backgroundColor={"black"}
              borderRadius={"5px"}
              borderWidth={0}
              padding={"0.1rem"}
              shadow={"none"}
            >
              {techincalSkillLibrary.map((skill, index) => (
                <a key={index} href="#">
                  <Tag.Label
                    className="tags"
                    onClick={() => handlSkillChange(index)}
                    color={"white"}
                    paddingInline={"0.5rem"}
                    paddingBlock={"0.3rem"}
                    fontSize={"0.8rem"}
                  >
                    {skill.name}
                  </Tag.Label>
                </a>
              ))}
            </Tag.Root>
          </HStack>
          <BigCircleButton onClick={() => handlSkillChange(index)}>
            <BiArrowToRight size={35} color="white" />
          </BigCircleButton>
        </VStack>
      </Container>
    </>
  );
}
