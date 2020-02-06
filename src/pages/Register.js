import React from 'react'

import{StyleSheet,View,Text,TextInput} from 'react-native';

function Register({navigation}){
    var nomePlayer;

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder=" Digite o nome: "
                placeholderTextColor= "#c4c4c4"
                autoCapitalize= 'words'
                autoCorrect={false}
                value={nomePlayer}

                //atualiza onchange
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151515',
    },
    text: {
        color: '#c4c4c4',
    },
    textInput: {
        borderWidth: 1,
        height: 40,
        width: 200,
        borderLeftColor:  '#FFF',
        borderRightColor: '#FFF',
        backgroundColor: '#FFF',
        marginTop: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 18,
    }
});

export default Register;