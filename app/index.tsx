import { SafeAreaView, StyleSheet } from "react-native";
import { Task } from "../src/components/Task";
import { CardNumber } from "../src/components/CardNumber";
import { InputAddTask } from "../src/components/InputAddTask";

export default function Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <InputAddTask />
      <CardNumber />
      <Task />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28385E",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 16,
  },
});
