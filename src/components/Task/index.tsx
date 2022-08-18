import { CheckCircle, Circle, Trash } from "phosphor-react-native";
import { useState } from "react";
import { TouchableOpacity, View, Text, GestureResponderEvent } from "react-native";
import { styles } from './styles'

interface TaskProps {
  actualTask: string
  onRemove: (e: GestureResponderEvent) => void
  onAddConcluded: () => void
  onRemoveConcluded: () => void
}

export function TheTask({ actualTask, onRemove, onAddConcluded, onRemoveConcluded }: TaskProps) {
  const [check, setCheck] = useState(false)

  const customStyle = check ? styles.textA : styles.textB

  return (
    <View style={styles.container}>
      {check == false ?
        <TouchableOpacity style={styles.notToggled}  onPress={() => {
          setCheck(true)
          onAddConcluded()
        }} ><Circle color="#4EA8DE" size={24}/></TouchableOpacity>
        :
        <TouchableOpacity style={styles.toggled} onPress={() => {
          setCheck(false)
          onRemoveConcluded()
        }} ><CheckCircle color="#5E60CE" weight="fill" size={24}/></TouchableOpacity>
      }
      <View style={styles.textDiv}>
        <Text style={customStyle}>
          {actualTask}
        </Text>
      </View>
      <TouchableOpacity style={styles.trash} onPress={(e) => {
        if (check) onRemoveConcluded()
        onRemove(e)
      }}><Trash color="#808080" size={24}/></TouchableOpacity>
    </View>
  )
}