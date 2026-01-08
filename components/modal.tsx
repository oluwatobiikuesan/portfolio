import { Container, Grid, GridItem, Image } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface ModalData {
  image: string;
  name: string;
  stack: string[];
  note: string;
}
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  data: ModalData[];
}

export default function Modal({ isOpen, onClose, data, children }: ModalProps) {
  return (
    <Container display={isOpen ? "block" : "none"}>
      <Grid templateColumns={"repeat(2, 1fr)"}>
        <GridItem>
          <Image src={data[0].image} alt={data[0].name} />
        </GridItem>
        <GridItem>{children}</GridItem>
      </Grid>
    </Container>
  );
}
