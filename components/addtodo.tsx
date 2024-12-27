import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, View} from 'react-native';

export default function AddToDo({hat_prop}) {
  const [text, oninput] = useState('');
  const changeHandler = val => {
    oninput(val);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={changeHandler}
        value={text}
        placeholder="Add new tasks"
        placeholderTextColor="white"

      />
    <View style={styles.button}>
      <Button
        title="Add Task"
        onPress={() => {
          hat_prop(text);
          oninput('');
        }}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    // marginTop: 10,
  },
  input: {
    paddingLeft: 10,
    paddingTop:15,
    paddingBottom:15,
    // margin: 5,
    // marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    color: 'white',
    marginBottom: 10,
    fontSize: 18,
  },
  button:{
    padding:5,
    paddingTop:10,
    paddingHorizontal:0,
  }
});
