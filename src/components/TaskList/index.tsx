import { useContext } from 'react';
import { View, Text, FlatList, Image, Alert } from 'react-native';


import { Context, taskData } from '../../contexts/context';
import { styles } from './styles';
import { Task } from '../Task'
const emptyListIcon = require('../../assets/empty-list-icon-3x.png')


export function TaskList() {
  const { tasks, checkTodo, removeTodo } = useContext(Context)

  function handleCheckedBox(task: taskData) {
    checkTodo(task)
  }

  function handleRemoveTask(task: taskData) {
    removeTodo(task)
  }

  return (
    <View style={styles.container}>
      <View style={styles.progress}>
          <View style={styles.textGroup}>
            <Text style={styles.created}>
              Criadas
            </Text>
            <Text style={styles.quantity}>{tasks.length}</Text>
          </View>
          <View style={styles.textGroup}>
            <Text style={styles.finished}>
              Concluídas
            </Text>
            <Text style={styles.quantity}>{tasks.filter(task => task.isDone === true).length}</Text>
          </View>
      </View>

      <FlatList 
        showsVerticalScrollIndicator={false}
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Task 
            key={item.id}
            title={item.description}
            onChecked={() => handleCheckedBox(item)}
            toggleCheckBox={item.isDone}
            onRemove={() => handleRemoveTask(item)}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <Image style={{marginBottom: 16, width: 56, height: 56}} source={emptyListIcon}/>
            <Text style={styles.emptyListFirstText}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.emptyListSecondText}>Crie tarefas e organize seus itens a fazer</Text>
          </View>
        )}
      />
    </View>
  );
}