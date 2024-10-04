// account/LoginComponent.js
import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Passcode } from "../component";
import { useEffect } from "react";

const LoginComponent = ({ onLogin, logo }: any) => {
  const [passcode, setPasscode] = useState("");

  useEffect(() => {
    if(passcode.length == 6){
      onLogin(passcode)
    }
    return () => {
    }
  }, [passcode])
  

  return (
      <View style={styles.container}>
        <Image source={logo}></Image>
        <Text style={styles.welcomeText}>Welcome back!</Text>
        <Passcode
          setPasscode={setPasscode}
          title="Enter your passcode"
          length={6}
          passcode={passcode}
        ></Passcode>
      </View>
  );
};

const styles = StyleSheet.create({
  container :{
    flex: 1,
    flexDirection : "column",
    justifyContent : "space-evenly",
    alignItems : 'center',
    padding: 20,
  },
  welcomeText : {
    fontSize : 25,
    color : "white"
  },

})
export default LoginComponent;
