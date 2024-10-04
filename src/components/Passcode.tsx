import { useEffect, useState } from "react";
import {
  Pressable,
  Button as ReactButton,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Keypad from "./Keypad";

export default function Passcode({setPasscode, length, passcode, title }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.passcodeContainer}>
        {[...Array(length)].map((value, index): any => {
          if (passcode.length <= index)
            return <Text key={`passcode ${index}`} style={styles.passcodeText}>◯</Text>;
          else return <Text key={`passcode ${index}`} style={styles.passcodeText}>⬤</Text>;
        })}
      </View>
      <Keypad pinLength={length} onSetPasscode={setPasscode} code={passcode}></Keypad>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width : "100%",
    alignSelf : 'center'
  },
  title: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },
  passcodeContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-around",
  },
  passcodeText: {
    color: "white",
    fontSize: 40,
  },
});
