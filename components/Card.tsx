import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {data} from "@/constants/Cards"

interface CardData {
    qa:string,
    perc:string
}

const Card = () => {
  return (
    <View style={styles.container}>
        {data && data.map((value:CardData,index:number)=>{
        return (
            <View key={index} style={styles.card}>
            <Text style={styles.ques}>Q: {value.qa}</Text>
            <Text style={styles.perc}>{value.perc}</Text>
        </View>
        )

        })}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        marginBottom:50,
        width:"90%",
        margin:"auto"
    },
    card:{
        display:"flex",
        justifyContent:"center",
        alignItems:"flex-start",
        margin:"auto",
        borderWidth:1,
        borderColor:"#0e81a8",
        padding:10,
        borderRadius:10,
        marginBottom:10
        
    },
    ques:{
        fontSize:15,
        fontWeight:400,
        lineHeight:22.5
    },
    perc:{
        fontSize:12,
        color:"white",
        width:50,
        textAlign:"center",
        padding:5,
        paddingBottom:7,
        paddingTop:7,
        marginTop:16,
        marginLeft:20,
        borderRadius:5,
        backgroundColor:"#0e81a8"
    },
})