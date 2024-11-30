import { Container, Input, InputButton } from "./styles";
import { Feather } from "@expo/vector-icons";

type Props = {
  onPress: () => void;
  onChangeText: (text: string) => void;
  value: string;
};

export function InputAddTask({ onPress, onChangeText, value }: Props) {
  return (
    <Container>
      <Input
        placeholder="Digite a tarefa"
        placeholderTextColor="white"
        keyboardType="default"
        value={value}
        onChangeText={onChangeText}
      />
      <InputButton onPress={onPress}>
        <Feather name="plus-square" size={24} color="white" />
      </InputButton>
    </Container>
  );
}
