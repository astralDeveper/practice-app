import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import chart from "@/assets/images/chart.svg"
const Chart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={chart} style={styles.image} resizeMode="contain" />
      </View>
    </SafeAreaView>
  )
}

export default Chart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    margin:0,
    flex: 1,
    alignSelf: 'stretch',
    resizeMode: 'cover', // or 'cover', 'stretch', etc.
    height:100,
    width:350
  },

})