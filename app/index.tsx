import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Task } from "../src/components/Task";
import { CardNumber } from "../src/components/CardNumber";
import { InputAddTask } from "../src/components/InputAddTask";
import { useState } from "react";

export default function Screen() {

  const [tasks, setTasks] = useState<{description: string; check: boolean}[]>([]);
  const [taskText, setTaskText] = useState("");

  function handleTaskAdd(){
    if(taskText.length > 0){
      return Alert.alert("Erro", "Tarefa está sem descricão");
    }
    if(tasks.some((task) => task.description === taskText)){
      return Alert.alert("Erro", "Tarefa já existe");
    }
    const newTask = {description: taskText, check: false};
    setTasks([...tasks, newTask]);
    setTaskText('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <InputAddTask />
      <CardNumber />
      <FlatList 
        data={tasks} 
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({item}) =>( <Task />)} 
        ListEmptyComponent={() => (
          <View>
            <Text>Tarefa não cadastrada!</Text>
            <Text>Crie uma tarefa.</Text>
          </View> 
        
      )}/>

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
    paddingTop: 64,
    gap: 16,
  },
});
