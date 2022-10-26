import { useState, useContext } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './styles';
import { Context } from '../../contexts/context';


export function TaskForm() {
  const { addTodo } = useContext(Context)
  
  const [taskDescription, setTaskDescription] = useState('')

  function handleAddTodo() {
    addTodo({id: 'id' + (new Date()).getTime(),
            description: taskDescription,
            isDone: false})
    setTaskDescription('')
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input} 
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor={'#808080'}
        onChangeText={setTaskDescription}
        value={taskDescription}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleAddTodo}
      >
        <Ionicons name="add-circle-outline" size={20} color="#F2F2F2" />
      </TouchableOpacity>
    </View>
  );
}