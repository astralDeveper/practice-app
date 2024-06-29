import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { qa } from "../../constants/qa";
import Slider from "@react-native-community/slider";
import KeepMountedModal from "../../components/keepMountedModal";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import useModal from "../../hooks/useModal";
const QA: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const [tempProgress, setTempProgress] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const { isShowing, toggle } = useModal();
  const navigation = useNavigation<NavigationProp<any>>();

  const handleProgressChange = (value: number) => {
    const newProgress = Math.min(Math.max(0, value), 100); // Ensures value stays between 0-100
    setTempProgress(newProgress);
  };

  const handleSubmit = () => {
    setProgress(tempProgress);
    console.log(tempProgress);
    navigation.navigate("Image");
    // Send tempProgress to the backend here
    // Example of sending data to the backend
    // fetch('/api/submit-progress', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ progress: tempProgress })
    // });
  };

  const openModal = () => {
    setOpen(true);
  };

  const handleOutsideClick = () => {
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Question/Answer</Text>

      {qa &&
        qa.map((value, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>
                <Text>Q:</Text> {value.qa}
              </Text>
            </View>
            <View style={styles.sliderContainer}>
              <Text style={styles.progressText}>{tempProgress}%</Text>
              <Slider
                minimumValue={0}
                maximumValue={100}
                value={tempProgress}
                onValueChange={handleProgressChange}
                style={styles.slider}
              />
            </View>
            <Button
              title={`Submit (${tempProgress}%)`}
              onPress={openModal}
              color="#1976d2"
            />
            {open && (
              <KeepMountedModal
                isShowing={isShowing}
                hide={toggle}
                handleSubmit={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            )}
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
  header: {
    backgroundColor: "#8A8A8A",
    width: "64%",
    textAlign: "center",
    borderRadius: 10,
    fontSize: 24,
    paddingVertical: 15,
    paddingHorizontal: 30,
    color: "white",
    fontWeight: "bold",
    marginVertical: 20,
  },
  card: {
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 40,
    textAlign: "center",
    width: "60%",
    marginVertical: 10,
    borderRadius: 10,
  },
  questionContainer: {
    marginBottom: 15,
    alignItems: "center",
  },
  questionText: {
    fontSize: 20,
  },
  sliderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  progressText: {
    color: "gray",
    fontSize: 14,
  },
  slider: {
    flex: 1,
    marginLeft: 10,
  },
});

export default QA;
