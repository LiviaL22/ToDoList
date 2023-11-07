import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, Keyboard, FlatList} from 'react-native';
import Task from './components/Task';
import { MaterialIcons } from '@expo/vector-icons'; 
import uuid from 'react-native-uuid';
import Footer from './components/Footer';
 

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addToList = () => {
    if (inputValue === "") {
      Alert.alert('Oops!', 'Add Something To Do', [        /*Aggiungere un input altrimenti alert*/
        {
          text: 'Ok'
        }
      ])
      return
    }
    const newItem = {                           /*Creare id */
      id: uuid.v4(),
      item: inputValue
    }
    setTasks([newItem, ...tasks]);
    setInputValue("");
    Keyboard.dismiss();

  };

  const deleteFromList = (id) => {
    setTasks(tasks.filter((task)=> task.id != id))
  }

  
  return (
    <View style={styles.container}>

     <View style={styles.taskWrapper}>
       
        <View style={styles.title}>

           <Image style={styles.img} source={require('./assets/toDo.jpg')} />
          
          <Text style={styles.text}>Today's Tasks</Text>

        </View>
     
        <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={setInputValue}
          placeholder={'Add Task..'}
        />
          
        <TouchableOpacity onPress={addToList}>
          
           <View style={styles.btn}>
            
            <Text style={{ color: 'white' }}>Add To List</Text>

            <MaterialIcons
              style={{color: 'white', marginLeft: 4}}
              name='add-box'
              size={24}
            />

          </View>
          
        </TouchableOpacity>

        <View style={styles.items}>

          <FlatList keyExtractor={(item) => item.id}
            data={tasks}
            renderItem={({ item }) => (
              <Task task={ item } deleteFromList={deleteFromList}/>
            )}
          />
          
        </View>

      </View>

       <Footer/>
      
      <StatusBar style='auto' />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  img: {
    width: 50,
    height: 50,
    
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  taskWrapper: {
    paddingTop: 88,
    paddingHorizontal: 20,

  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 20,
   
  },
  input: {
    backgroundColor: '#EBEAED',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
        
  },
  btn: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
