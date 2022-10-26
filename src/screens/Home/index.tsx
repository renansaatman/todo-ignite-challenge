import { View, Image } from 'react-native';
import { styles } from './styles';

import { Header } from '../../components/Header'
import { TaskForm } from '../../components/TaskForm'
import { TaskList } from '../../components/TaskList'

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <TaskForm />
      <TaskList />
    </View>
  );
}