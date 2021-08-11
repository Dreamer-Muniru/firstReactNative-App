import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.text}>Edit Profile</Text>
      </View>
      <View style={styles.avatar}>
        <Image source={require('./img/pp.jpg')} style={styles.img} />
      </View>
      <View style={styles.inputField}>
        <Text style={styles.labelText}>School</Text>
        <TextInput placeholder="Name of School" style={styles.inputBox} />
        <Text style={styles.labelText}>Email Address</Text>
        <TextInput placeholder="Email Address" style={styles.inputBox}/>
        <Text style={styles.labelText}>Name</Text>
        <TextInput placeholder="Name" style={[styles.inputBox, styles.borderRadius]}/>
        <Text style={styles.labelText}>Nick Name</Text>
        <TextInput placeholder="Nick Name" style={[styles.inputBox, styles.borderRadius]}/>
        <Text style={styles.labelText}>Emergency Contact</Text>
        <TextInput placeholder="Contact" style={[styles.inputBox, styles.borderRadius]}/>

        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Update Profile</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
   header: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'

  },
  text:{
    fontSize: 18,
    justifyContent: 'center',
    fontWeight: 'bold',
    margin: 15,

  },
  avatar:{
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
   width: 150,
   height:150,
   borderRadius: 100,
    
    
  },

  // Input flied Styling
  inputField:{
    fontSize: 20,
    marginLeft: 40,
    marginTop: 30,
  
  
  },
  inputBox: {
    marginBottom: 20,
    width: '90%'

  },
  borderRadius:{
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  labelText:{
    fontSize: 16,
    color: '#55C1F6',
    fontWeight: 'bold',

  },

  button:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#55C1F6',
    marginLeft: 15,
    fontSize: 20,
    width: '80%',
    height: 50,
    borderRadius: 25,  

  },
  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
    

  }
});
