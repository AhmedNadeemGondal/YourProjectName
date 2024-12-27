import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';

export default function ToDoItem({item, pressHandler}) {
  return (
    
<View style={styles.item}>
  <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <AntdesignIcon 
      style={{ 
        // backgroundColor: "blue", 
        padding:5, }}
      name="delete" 
      size={30} 
      color="white" />
  </TouchableOpacity>
      <Text style={styles.text}>{item.text}</Text>
</View>
    
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15,
    // marginTop: 16,
    borderColor: '#bbb',
    // borderWidth: 1,
    // borderStyle: 'dashed',
    // borderRadius: 10,
    color: 'white',
    // borderBottomWidth:2,
    fontSize: 18,
    // backgroundColor: "red",
  },
  text: {color: 'white',
    fontSize: 18,
    marginLeft: 10,
    // backgroundColor: "yellow",
  },
});
