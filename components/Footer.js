import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

const Footer =() => {
    return (
        <View style={styles.footer}>
            <Text>
                <FontAwesome5
                    name="copyright"
                    size={14}
                    color="black"
                />
                Livia Luciani
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    }
})

export default Footer;

