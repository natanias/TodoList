import { Container, Input, InputButton } from "./styles";
import { Feather } from "@expo/vector-icons";
export function InputAddTask() {
  return (
    <Container>
      <Input
        placeholder="Digite a tarefa"
        placeholderTextColor="white"
        keyboardType="default"
      />
      <InputButton>
        <Feather name="plus-square" size={24} color="white" />
      </InputButton>
    </Container>
  );
}
