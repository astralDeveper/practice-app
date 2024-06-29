import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import RadioButtons from "@/components/RadioButton/RadioButtons";

const SignUp : React.FC = () => {
  const navigation = useNavigation<any>();

  interface formData {
    username: string,
    email: string,
    password: string,
    age: string,
    gender: string,
    mobileNumber: string,
    // Add other properties as needed
  }

  const [formData, setFormData] = useState <formData> ({
    username: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    mobileNumber: "",
  });

  const handleFormData = (name: any, value: any) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value, }));
  };
  
const handleForm = ()=>{
  setFormData({
    username: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    mobileNumber: "",
  })
  console.log(formData);
}

  


  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1, width: "100%", marginTop: 20 }}>
        <View>
          <Text style={style.header}>Registration</Text>
        </View>

        <View
          style={{
            alignItems: "center",
            display: "flex",
            width: "100%",
            marginTop: 20,
          }}
        >
          <View style={{ width: "90%" }}>
            <Text style={style.inputText}>Usename</Text>
            <TextInput
              keyboardType="default"
              value={formData.username}
              style={style.input}
              onChangeText={(text) => handleFormData("username", text)}
            />
          </View>

          <View style={{ width: "90%", marginTop: -10 }}>
            <Text style={style.inputText}>Email</Text>
            <TextInput
              style={style.input}
              keyboardType="default"
              textContentType="emailAddress"
              value={formData.email}
              onChangeText={(text) => handleFormData("email", text)}
            />
          </View>

          <View style={{ width: "90%", marginTop: -10 }}>
            <Text style={style.inputText}>Password</Text>
            <TextInput
              style={style.input}
              secureTextEntry={true}
              keyboardType="default"
              textContentType="password"
              value={formData.password}
              onChangeText={(text) => handleFormData("password", text)}
            />
          </View>

          <View style={{ width: "90%", marginTop: -10 }}>
            <Text style={style.inputText}>Age</Text>
            <TextInput
              style={style.input}
              keyboardType="numeric"
              value={formData.age}
              onChangeText={(text) => handleFormData("age", text)}
            />
          </View>

          <View style={{ width: "90%", marginTop: -10 }}>
            <Text style={style.inputText}>Gender</Text>
            <View>
              <RadioButtons formData={formData}  />
            </View>
          </View>

          <View style={{ width: "90%", marginTop: 10 }}>
            <Text style={style.inputText}>Mobile Number</Text>
            <TextInput
              keyboardType="number-pad"
              textContentType="telephoneNumber"
              style={style.input}
              value={formData.mobileNumber}
              onChangeText={(text) => handleFormData("mobileNumber", text)}
            />
          </View>
        </View>

        <View
          style={{
            display: "flex",
            alignItems: "flex-start",
            left: 36,
            marginTop: 10,
          }}
        >
          <TouchableOpacity style={style.button} onPress={handleForm} >
            <Text style={style.text}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;

const style = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 8,
    borderColor: "#0E81A8",
    borderRadius: 7,
    width: "92%",
    paddingVertical: 22,
    fontSize: 16,
    fontWeight: 600,
  },
  inputText: {
    fontSize: 15,
    fontWeight: "bold",
    left: 10,
    top: 10,
    marginBottom: 8,
  },
  button: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    backgroundColor: "#0E81A8",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
