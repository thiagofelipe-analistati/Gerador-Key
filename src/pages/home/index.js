import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import logo from '../../assets/logo.png'
import ModalPassword from '../../componentes/modal'
import Slider from '@react-native-community/slider'
import { useState } from 'react';

let charset= "abcefghijlmnopqrstuvxz123456789"

export  function Home() {
  const [size,setSize] = useState(6)
  const [passwordValue, setPasswordVaue] = useState ("")
  const [modalVisible, setModalVisible] = useState(false)  

  function generatepassword (){
    let password = "";
    for(let i= 0, n = charset.length; i< size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    setPasswordVaue(password)
    setModalVisible(true);
  }
  
  return (
    <View style={styles.container}>
      <Image  
        source={logo}
        style={styles.logo}
      />
      <Text style={styles.caractereText}> {size} Caracteres</Text>
      <View style={styles.area}>
        <Slider style={{height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#FF0000'
          minimumTrackTintColor='#000'
          thumbTintColor='#392de9'
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>
      <TouchableOpacity style={styles.Button} onPress={generatepassword}>
        <Text style={styles.buttonText}> Gerar senha </Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword  password={passwordValue} handleClose={() => setModalVisible(false)}/>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 60
  },
  caractereText:{
    color: '#000',
    fontSize: 30,
    fontWeight:'bold'
  },
  area:{
    marginBottom: 50,
    marginTop: 40,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 6
  },
  Button:{
    backgroundColor: '#392de9',
    width: "80%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText:{
    color: "#FFF",
    fontSize: 20
  }
});
