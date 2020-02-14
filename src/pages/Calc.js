import React from 'react'

import{StyleSheet,View,Text,TextInput} from 'react-native';


function Calc({navigation}){
    return(
        <View style={StyleSheet.container}>
            <Text>David otaru</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
    }
});

export default Calc;