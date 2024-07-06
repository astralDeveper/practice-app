import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { useModal } from "@/context/Modalprovider";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
const Modals: React.FC = () => {
  const { isModal, setIsModal } = useModal();
  const navigation = useNavigation<any>();
  console.log("This is from Modal comp", isModal);
  return (
    <View style={styles.centeredView}>
      <Modal
        // animationType="slide"
        transparent={false}
        visible={isModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          // setIsShowing(!isShowing);
        }}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView , styles.structure]}>
            <Pressable
              // style={[styles.button, styles.buttonClose]}
              onPress={() => setIsModal(!isModal)}
            >
              <Text style={styles.textStyle}>
                <AntDesign name="closecircleo" size={24} color="black" />
              </Text>
            </Pressable>
            <Text style={styles.modalText}>
              Would you like to see the chart ?
            </Text>

            <View style={styles.btngroup}>
              <Pressable style={[styles.button, styles.buttonOpen]} onPress={() =>{setIsModal(false); navigation.navigate('chart/index')}} >
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonOpen]} onPress={() =>{setIsModal(false); navigation.navigate('index')}}>
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
              
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  structure:{
    display:"flex",
    justifyContent:"center",
    alignItems:"flex-end",
    gap:30
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#0e81a8",
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonClose: {
    // backgroundColor: '#2196F3',
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:18
  },
  btngroup:{
    display:"flex",
    flexDirection:"row",
    gap:20
  },
});

export default Modals;
