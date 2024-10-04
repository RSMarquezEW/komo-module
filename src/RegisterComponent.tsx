// account/LoginComponent.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
const RegisterComponent = ({ onRegister, backgroundColor, fontFamily, fontSize, channelId } : any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
   
    const handleRegister = () => {
      onRegister(username, password, email, channelId);
    };
   
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={[styles.label, { fontFamily, fontSize }]}>Username:</Text>
        <TextInput
          style={[styles.input, { fontFamily, fontSize }]}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter username"
        />
        <Text style={[styles.label, { fontFamily, fontSize }]}>Password:</Text>
        <TextInput
          style={[styles.input, { fontFamily, fontSize }]}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          secureTextEntry
        />
        <Text style={[styles.label, { fontFamily, fontSize }]}>Email:</Text>
        <TextInput
          style={[styles.input, { fontFamily, fontSize }]}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email"
        />
        <Button title="Register" onPress={handleRegister} />
      </View>
    );
  };
   
  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    label: {
      marginBottom: 5,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 15,
      paddingLeft: 10,
    },
  });
   
  export default RegisterComponent;