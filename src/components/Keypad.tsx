import { Feather } from "@expo/vector-icons";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");
const dialPadContent = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "X"];

const dialPadSize = width * 0.2;
const dialPadTextSize = dialPadSize * 0.4;

const pinLength = 4;
const Keypad = ({onSetPasscode,code, pinLength,}: any) => {
  const setPasscode = (pass : string)=>{
    if(pass.length <= pinLength){
      onSetPasscode(pass)
    }
  }
  return (
    <FlatList
      contentContainerStyle={{ alignItems: "center" }}
      data={dialPadContent}
      numColumns={3} // set number of columns
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
          onPress={() => {
            if (item === "X") {
              setPasscode(code.slice(0, -1));
            } else {
              // if (code.length === pinLength - 1) {
              //   navigation.navigate("Home");
              // }
              setPasscode(code + item);
            }
          }}
            disabled={item === ""} // make the empty space on the dialpad content unclickable
          >
            <View
              style={[
                {
                  width: dialPadSize,
                  height: dialPadSize,
                },
                styles.dialPadContainer,
              ]}
            >
              {item === "X" ? (
                <Feather name="delete" size={24} color="white" />
              ) : (
                <Text
                  style={[{ fontSize: dialPadTextSize }, styles.dialPadText]}
                >
                  {item}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};
export default Keypad;

const styles = StyleSheet.create({
  dialPadContainer: {
    margin: 10,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  dialPadText: {
    color: "white",
  },
});
