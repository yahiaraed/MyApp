import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Post = (props) => {
  return (
    <View style={styles.box}>
      <Text style={styles.time}>{props.time}</Text>
      <View style={styles.ntbox}>
        <Text style={styles.name}>{props.name} </Text>
        <Text style={styles.txt}> {props.txt}</Text>
      </View>
      <Image source={{ uri: props.image }} style={styles.img} />
    </View>
  )
}

export default Post

const styles = StyleSheet.create({


  box: {

    
    width: 370,
    height: 100,
    flexDirection: "row",
    alignItems: "center",


  },

  time: {

    fontSize: 18,

  },

  ntbox: {
    marginLeft: 125,
    marginRight: 10,
    alignItems: "flex-end",
    justifyContent: "center",


    width: 119

  },
  name: {

    marginLeft:50,
    fontSize: 28,
  },

  txt: {

    fontSize: 15

  },

  img: {

    borderRadius: 100,
    width: 70,
    height: 70,

  }

})