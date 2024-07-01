import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import Slider from "@react-native-community/slider";
import { qa } from "@/constants/qa";

const qa1 = () => {
  const [progress, setProgress] = useState(0);

  const handleProgressChange = (value: any) => {
    if (value < 0) {
      setProgress(0);
    } else {
      setProgress(value);
    }
  };

  const handleSubmit = () => {
    console.log(`Progress: ${progress * 100}%`);
  };

  return (
    // <SafeAreaView>
        <View style={styles.top}>
        {/* <View> */}
        <Text style={styles.header}>Question/Answer</Text>

        {/* </View> */}
      {qa &&
        qa.map((value: any, index: number) => {
          return (
            <View style={styles.container} key={index}>
              <Text style={styles.text}>Q: {value.qa}</Text>
              <Slider
                style={styles.slider}
                minimumValue={0.01}
                maximumValue={1}
                step={0.01}
                onValueChange={handleProgressChange}
                value={progress}
                minimumTrackTintColor="#0e81a8"
                maximumTrackTintColor="#000000"
                thumbTintColor="#0e81a8"
              />
              <Text style={styles.text}>{(progress * 100).toFixed(1)}%</Text>
              <View style={styles.buttonContainer}>
                {/* <Button title="Submit" onPress={handleSubmit} style={styles.button}>
            Submit
          </Button> */}
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                  <Text style={styles.btntxt}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
        </View>
    // </SafeAreaView>
  );
};

export default qa1;

const styles = StyleSheet.create({
  top: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#F5FCFF",
  },
  header: {
    margin:"auto",
    width: "64%",
    textAlign: "center",
    marginVertical: 20,
    fontSize:24.13,
    fontWeight:500,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  slider: {
    width: "80%",
    height: 40,
    color: "blue",
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#0e81a8",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  btntxt: {
    fontSize: 14.6,
    color: "white",
  },
});
