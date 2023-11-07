import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Task = ({task: {id,item}, deleteFromList}) => {

    return (
        <View style={styles.item}>

            <View style={styles.itemLeft}>

                 <Ionicons
                onPress={() => deleteFromList(id)}
                name='checkbox'
                size={35}
                color='blue'
            />
                <Text style={styles.itemText}>{item}</Text>

            </View>
           
         </View>
     )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#EBEAED',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom: 20,

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',

    },
    itemText: {
        color: 'black',
        marginLeft: 20,

    },
 
});

export default Task;