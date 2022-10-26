import { createContext, useState } from "react";
import { Alert } from 'react-native'

export interface taskData {
  id: string
  description: string
  isDone: boolean
}

interface ContextData {
  addTodo: (todoTask: taskData) => void
  removeTodo: (todoTask: taskData) => void
  checkTodo: (todoTask: taskData) => void
  tasks: taskData[]
}


export const Context = createContext<ContextData>({} as ContextData)

export function ContextProvider({children} : any) {
  const [tasks, setTasks] = useState<taskData[]>([])
  
  function checkTodo(todoTask: taskData) {
    setTasks(prevTasks => prevTasks.map(task => {
      if(task.id === todoTask.id) {
        return {
          id: task.id,
          description: task.description,
          isDone: !task.isDone
        }
      }
      else {
        return task
      }
    }))
  }

  function addTodo(todoTask: taskData) {
    if(todoTask.description === '') {
      return Alert.alert('Campo vazio!')
    }

    if(tasks.find(task => task.description === todoTask.description)) {
      return Alert.alert('Essa task já existe!')
    }

    setTasks(prevTasks => [...prevTasks, todoTask])
  }

  function removeTodo(todoTask: taskData) {
    Alert.alert("Remover", 'Deseja remover a tarefa?', [
      {
        text: 'Sim',
        onPress: () => setTasks(prevTasks => prevTasks.filter(task => task.id !== todoTask.id))
      },
      {
        text: 'Não',
        style: 'cancel',
      }
    ])
  }


  return (
    <Context.Provider value={{addTodo, tasks, checkTodo, removeTodo}}>
      {children}
    </Context.Provider>
  )
}

