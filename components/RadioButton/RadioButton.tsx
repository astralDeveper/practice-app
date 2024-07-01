import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
    borderRadius: 8,
    padding: 16,
    elevation: 4,
    borderColor: "#0E81A8",
    borderWidth: 1,
    width: "90%",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
});

interface RadioButtonsProps {
  formData: any; // Define formData prop with appropriate type
}

const RadioButtons: React.FC<RadioButtonsProps> = ({ formData }) => {
  const [selectedValue, setSelectedValue] = useState<any>("Male");

  formData.gender = selectedValue;

  

  return (
    <View style={styles.container}>
      <View style={styles.radioGroup}>
        <View style={styles.radioButton}>
          <RadioButton.Android
            value="Male"
            status={selectedValue === "Male" ? "checked" : "unchecked"}
            onPress={() => setSelectedValue("Male")}
            color="#007BFF"
          />
          <Text style={styles.radioLabel}>Male</Text>
        </View>

        <View style={styles.radioButton}>
          <RadioButton.Android
            value="Female"
            status={selectedValue === "Female" ? "checked" : "unchecked"}
            onPress={() => setSelectedValue("Female")}
            color="#007BFF"
          />
          <Text style={styles.radioLabel}>Female</Text>
        </View>

        <View style={styles.radioButton}>
          <RadioButton.Android
            value="Other"
            status={selectedValue === "Other" ? "checked" : "unchecked"}
            onPress={() => setSelectedValue("Other")}
            color="#007BFF"
          />
          <Text style={styles.radioLabel}>Other</Text>
        </View>
      </View>
    </View>
  );
};

export default RadioButtons;