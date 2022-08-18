import { useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { Header } from "../../components/Header";
import { TheTask } from "../../components/Task";
import { styles } from "./styles";

interface renderProps {
  item: string
  isConcluded: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [newTask, setNewTask] = useState('')
  const [focus, setFocus] = useState(false)
  const [concluded, setConcluded] = useState(0)
  const [created, setCreated] = useState(0)


  

  const customStyle = focus ? styles.inputFocus : styles.input

  function handleAddNewTask() {
    if (tasks.includes(newTask)) {
      setNewTask('')
      return Alert.alert("Esta tarefa já existe.")
    
    } 
    if (newTask == '') {
      setNewTask('')
      return Alert.alert("Por favor digite uma tarefa.")
    }
    else {
      setTasks(prevState => [...prevState, newTask])
      setNewTask('')
      setCreated(prevState => prevState + 1)
    } 
  }

  function handleRemoveTask(name: string) {
    
    Alert.alert("Remover", `Remover a tarefa: ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setTasks(prevState => prevState.filter(task => task !== name))
          setCreated(prevState => prevState - 1)
          
        }
        
      },
      {
        text: 'Não',
        onPress: () => handleAddConcluded(),
        style: 'cancel'
      }
    ])
    
  }

  function handleAddConcluded() {
    setConcluded(prevState => prevState + 1)
  }

  function handleRemoveConcluded() {
    setConcluded(prevState => prevState - 1)
  }

  return (
    
    <View>
      <Header/>
      <View style={styles.container}>
        <View style={styles.upper}>
          <TextInput
            style={customStyle} 
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onFocus={() => setFocus(true)}
            onBlur={e => setFocus(false)}
            onChangeText={setNewTask}
            value={newTask}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddNewTask}>
            <Image source={require('../../../assets/plus.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapper}>

        
          <View style={styles.main}>
            <View style={styles.quantity}>
              <View style={styles.left}>
                <Text style={styles.textLeft}>Criadas</Text>
                <View style={styles.spanLeftDiv}>
                  <Text style={styles.spanLeft}>{created}</Text>  
                </View>
              </View>
              <View style={styles.right}>
                <Text style={styles.textRight}>Concluídas</Text>
                <View style={styles.spanRightDiv}>
                  <Text style={styles.spanRight}>{concluded}</Text>
                </View>
              </View>
            </View>
            <FlatList style={styles.list}
              data={tasks}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TheTask 
                  key={item}
                  actualTask={item}
                  onRemove={() => handleRemoveTask(item)}
                  onAddConcluded={handleAddConcluded}
                  onRemoveConcluded={handleRemoveConcluded}
                />
              )}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => (
                <View style={styles.emptyList}>
                  <Image style={styles.emptyImg} source={require('./../../../assets/clipboard.png')}></Image>
                  <Text style={styles.textUp}>Você ainda não tem tarefas cadastradas</Text>
                  <Text style={styles.textDown}>Crie tarefas e organize seus itens a fazer</Text>
                </View>
                
              )}
            />
          </View>
        </View>
      </View>
    </View>
    
  )
}


