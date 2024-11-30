import { FlatList, Text, StyleSheet, View, Alert } from "react-native";
import { Task } from "../src/components/Task";
import { CardNumber } from "../src/components/CardNumber";
import { InputAddTask } from "../src/components/InputAddTask";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";

export default function Screen() {
  const [tasks, setTasks] = useState<{ description: string; check: boolean }[]>(
    []
  );
  const [taskText, setTaskText] = useState("");
  const [countTask, setCountTask] = useState(0);

  const handleAddTask = () => {
    if (taskText == "") {
      return Alert.alert("Erro", "Tarefa está sem descrição!");
    }

    if (tasks.some((task) => task.description === taskText)) {
      return Alert.alert("Erro", "Tarefa já existe!");
    }

    const newTask = { description: taskText, check: false };
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const handleTaskChangeStatus = (taskToChange: {
    description: string;
    check: boolean;
  }) => {
    const updatedTasks = tasks.filter((task) => task !== taskToChange);
    const newTask = {
      description: taskToChange.description,
      check: !taskToChange.check,
    };
    updatedTasks.push(newTask);
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskToDelete: {
    description: string;
    check: boolean;
  }) => {
    Alert.alert(
      "Atenção",
      `Deseja realmente excluir a tarefa ${taskToDelete.description}?`,
      [
        {
          text: "Sim",
          onPress: () => {
            const updatedTasks = tasks.filter((task) => task != taskToDelete);
            setTasks(updatedTasks);
          },
        },
        {
          text: "Cancelar",
          style: "cancel",
        },
      ]
    );
  };

  useEffect(() => {
    let totalTasks = tasks.length;
    setCountTask(totalTasks);
  }, [tasks]);

  return (
    <View style={styles.container}>
      <InputAddTask
        onPress={handleAddTask}
        onChangeText={setTaskText}
        value={taskText}
      />
      <CardNumber title={"Cadastradas"} num={countTask} color={"#1E1E1E"} />
      <CardNumber title={"Em Aberto"} num={0} color={"#E88A1A"} />
      <CardNumber title={"Finalizadas"} num={0} color={"#0E9577"} />

      <View style={styles.tasks}>
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Task
              title={item.description}
              status={item.check}
              onCheck={() => handleTaskChangeStatus(item)}
              onDelete={() => handleDeleteTask(item)}
            />
          )}
          ListEmptyComponent={() => (
            <View>
              <Text style={styles.text}>Nenhuma tarefa encontrada!</Text>
            </View>
          )}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28385E",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
    paddingTop: 64,
    gap: 16,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
  tasks: {
    justifyContent: "flex-start",
    flexDirection: "column",
    width: "100%",
  },
});
