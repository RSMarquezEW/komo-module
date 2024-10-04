// account/ForgotPasswordComponent.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
 
const ForgotPasswordComponent = ({ onResetPassword, backgroundColor, fontFamily, fontSize, channelId } : any) => {
  const [email, setEmail] = useState('');
 
  const handleResetPassword = () => {
    onResetPassword(email, channelId);
  };
 
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.label, { fontFamily, fontSize }]}>Email:</Text>
      <TextInput
        style={[styles.input, { fontFamily, fontSize }]}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email"
      />
      <Button title="Reset Password" onPress={handleResetPassword} />
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
 
export default ForgotPasswordComponent;