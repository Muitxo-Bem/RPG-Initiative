import React, { useState } from 'react'
import NumericInput from 'react-native-numeric-input';
import {MaterialIcons} from '@expo/vector-icons';
import{StyleSheet,ScrollView,View,TextInput, TouchableOpacity, Keyboard} from 'react-native';

function Register({navigation}){
    const [nomePlayer,setNomePlayer] = useState('');
    const [modPlayer,setModPlayer] = useState(0);

    function handleRegistration(){
        Keyboard.dismiss();
        console.log(nomePlayer,modPlayer);
    }
    return(
        <View style={styles.container}
                keyboardShouldPersistTaps={false}
        >
        <View style={styles.viewTextInput}
            keyboardShouldPersistTaps={false}
        >
            
            <TextInput
                style={styles.textInput}
                placeholder=" Digite o nome: "
                placeholderTextColor= "#c4c4c4"
                autoCapitalize= 'words'
                autoCorrect={false}
                keyboardAppearance='dark'
                textContentType='username'
                value={nomePlayer}
                onChangeText={setNomePlayer}
            />
            <NumericInput 
                type='up-down'
                value={modPlayer}
                onChange={setModPlayer}
                valueType='integer'
                textColor='#FFF'
                minValue={-5}
                maxValue={5}
                containerStyle={styles.modInput}
            />
            <TouchableOpacity onPress={handleRegistration} style={styles.submitButton}>
                <MaterialIcons name='add' size={40} color='#8e4dff'/>
            </TouchableOpacity>
        </View>

            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151515',
    },
    viewTextInput:{
        position:'absolute',
        top:5,
        left:15,
        right:25,
        flexDirection:'row',
        
        
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        borderLeftColor:  '#FFF',
        borderRightColor: '#FFF',
        backgroundColor: '#FFF',
        fontSize: 18,
    },
    modInput:{
        marginLeft:10,
        marginRight:10,
    },
    submitButton: {
        
        borderRadius: 25,
        backgroundColor: '#FFF',
        
    },
});

export default Register;