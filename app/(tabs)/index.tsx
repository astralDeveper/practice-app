import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context';
import demo from "@/assets/images/demo.svg";
import Card from '@/components/Card';
import person from "@/assets/images/person.jpg";
export default function HomeScreen() {
  return (
      <ScrollView>
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={person} style={styles.image}/>
        <Text style={styles.heading}>
          Home
         </Text>
         <Image source={demo} />

      </View>
      <View >
        <Text style={styles.tag}>
          Previous Q/A
        </Text>
      </View>
      <View>
      <Card/>
      </View>
    </SafeAreaView>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:"90%",
    margin:"auto",
    marginTop:20
  },
  heading:{
    fontSize:24.13,
    fontWeight:500,
  },
  tag:{
    backgroundColor:"#0e81a8",
    width:200,
    padding:10,
    textAlign:"center",
    fontSize:24.13,
    fontWeight:500,
    color:"white",
    margin:"auto",
    borderRadius:10,
    marginTop:15,
    marginBottom:41
    
  },
  image:{
    height:30,
    width:30,
    borderRadius:100
  },
 
});
