import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Login : React.FC = () => {
  const navigation = useNavigation<any>();

  interface formData {
    email: string,
    password: string,
  
    // Add other properties as needed
  }

  const [formData, setFormData] = useState <formData> ({
   
    email: "",
    password: "",
    
  });

  const handleFormData = (name: any, value: any) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value, }));
  };
  
const handleForm = ()=>{
  setFormData({
    email: "",
    password: "",
  })
  console.log(formData);
}

  


  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1, width: "100%", marginTop: 20 }}>
        <View>
          <Text style={style.header}>Login</Text>
        </View>

        <View
          style={{
            alignItems: "center",
            display: "flex",
            width: "100%",
            marginTop: 20,
          }}
        >

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
            <Text style={style.text}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;

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