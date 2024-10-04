import { useEffect, useState } from "react";
import {
  Pressable,
  Button as ReactButton,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Button({ type, title, onPress }: any) {
  const [buttonStyle, setButtonStyle] = useState({});
  const [textStyle, setTextStyle] = useState({});
  
  useEffect(() => {
    switch (type) {
      case "primary":
        setButtonStyle(styles.primary);
        setTextStyle(styles.primaryText)
        break;
      case "secondary":
        setButtonStyle(styles.secondary);
        setTextStyle(styles.secondaryText)
        break;
      default:
        setButtonStyle(styles.primary);
        break;
    }
    return () => {};
  }, [type]);

  return (
    <View style={styles.container}>
      <Pressable style={buttonStyle} onPress={onPress}>
        <Text style={textStyle}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 8,
  },
  primary: {
    borderColor: "white",
    color: "white",
    backgroundColor: "#ae0061",
    borderRadius: 10,
    alignItems: "center",
    borderWidth : 2,
  },
  primaryText :{
    padding : 10,
    fontSize : 20,
    color: "white",
  },
  secondary: {
    backgroundColor: "white",
    borderBlockColor: "white",
    borderRadius: 10,
    alignItems: "center",
    alignSelf : "stretch"
  },
  secondaryText: {
    padding : 10,
    fontSize : 20,
    color: "#ae0061",
  }
});
