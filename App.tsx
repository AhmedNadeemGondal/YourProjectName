import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './components/header';
import ToDoItem from './components/todoitem';
import AddToDo from './components/addtodo';
import Sandbox from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ]);

  const pressHandler_del = key => {
    // console.log('Pressed key:', key); // Log the key received by the function
    // console.log('Current todos:', todos); // Log the current state of todos

    const todo = todos.find(todo => todo.key == key);
    if (todo) {
      console.log('Deleted Task:', todo.text, '--Task Key:', todo.key);
    }

    setTodos(prevTodos => prevTodos.filter(todo => todo.key != key));
    // console.log(todo.key != key);
  };

  const hat = newTask_text => {
    console.log(newTask_text);

    if (newTask_text.length > 3) {
      setTodos([{text: newTask_text, key: Math.random().toString()}, ...todos]);
    } else {
      Alert.alert('Text is Short', 'must be more than 3 chars', [
        {text: 'Understood', onPress: () => console.log('alert closed')},
      ]);
    }
  };

  // Vanilla JS example below
  // function pressHandler(key) {
  //   setTodos(function(prevTodos) {
  //       return prevTodos.filter(
  //         function(todo) {return todo.key !== key;}
  //                             );
  //                                }
  //                     );     }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('Dismssed');
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddToDo hat_prop={hat} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <ToDoItem item={item} pressHandler={pressHandler_del} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  content: {
    flex:1,
    padding: 20,
    backgroundColor: '#000',
    paddingHorizontal:25,
  },
  list: {
    flex:1,
    marginTop: 20,
    color: 'white',
    // backgroundColor: 'grey',
    
  },
});
