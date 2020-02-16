import React, { useState } from 'react'
import NumericInput from 'react-native-numeric-input';
import{StyleSheet,KeyboardAvoidingView,Platform, Text,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {MaterialIcons} from '@expo/vector-icons'

function Register({navigation}){
    var platform = Platform.OS;
    const [nomePlayer,setNomePlayer] = useState('');
    const [modPlayer,setModPlayer] = useState(0);

    function dale(){
        console.log('dale');
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView style={styles.container}>
                <TextInput
                    style={styles.form}
                    placeholder='Digite um nome: '
                    placeholderTextColor="#c9c9c9"
                    autoCapitalize='words'
                    autoCorrect={false}
                    value={nomePlayer}
                    onChangeText={setNomePlayer}
                />
                
                <NumericInput
                    containerStyle={styles.mod}
                    type='up-down'
                    value={modPlayer}
                    onChange={setModPlayer}
                    minValue={-5}
                    maxValue={5}
                    valueType='integer'
                    iconSize={0}
                    totalWidth={platform=="android" ? 119 : undefined}
                />
        
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Calc',{})
                }} style={styles.confirmButton}>
                    <MaterialIcons name='check' size={40} color='black'/>
                </TouchableOpacity>
                
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor:'#848484',
        flex: 1,
    },
    form:{
        alignSelf: 'flex-start',
        backgroundColor: '#FFF',
        width: 180,
        borderWidth: 1,
        borderColor: 'black',
        top: 5,
        paddingLeft:3,
        ...Platform.select({
            ios:{
                height:38,
            },
            android:{
                height:47,
            }
        })
    },
    mod:{
       left: 3,
       top:5,
        
    },
    confirmButton:{
        left:4,
        top:5,
        borderRadius:50,
    }
    
});
export default Register;