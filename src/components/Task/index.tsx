import { Container, TaskDelete, TaskDone, TaskText } from "./styles";
import { Feather } from "@expo/vector-icons";
import React from "react";
type Props = {
  title: string;
  status: boolean;
  onCheck?: () => void;
  onDelete?: () => void;
};

export function Task({ title, status, onCheck, onDelete }: Props) {
  return (
    <Container>
      <TaskDone
        onPress={onCheck}
        style={status ? { backgroundColor: "#0E9577" } : {}}
      >
        {!status && <Feather name="square" size={24} color="white" />}
        {status && <Feather name="check-square" size={24} color="white" />}
      </TaskDone>
      <TaskText>{title}</TaskText>
      <TaskDelete onPress={onDelete}>
        <Feather name="trash-2" size={24} color="white" />
      </TaskDelete>
    </Container>
  );
}
