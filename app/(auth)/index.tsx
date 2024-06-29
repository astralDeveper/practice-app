import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={{flex:1}}>

     <View>
     <Text style={styles.title} > index</Text>
     </View>

      <TouchableOpacity onPress={()=>{navigation.navigate("(tabs)")}} style={{backgroundColor:"yellow"}}>
        <Text  >
          Hello Ahsan
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Login


const styles = StyleSheet.create({
  title:{
    flex:1,
      color:"white",
      // backgroundColor:"yellow"
  }

})