
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'



const Post = (props) => { 
  return (
    <View>
        <View style={styles.postsheder}>
            <Image source={{ uri: props.imagepro}} style={styles.imgpro} />
            <Text>{props.name}</Text>
        

        </View>
        <Image source={{ uri: props.imagepost }} style={styles.img} />
        <View style={styles.footer}>
            <View style={styles.footericon}>
                
            </View>

        </View>
        


  </View>
  )
}

export default Post

const styles = StyleSheet.create({
postsheder:{
flexDirection:"row",
alignItems:"center",
marginVertical:10,


},
imgpro:{
width:50,
height:50,
marginRight:10,
borderRadius:90,


},
img:{
width:300,
height:300,

},
footer:{
flexDirection:"row",
justifyContent:"space-between",



},
footericon:{
flexDirection:"row",
marginVertical:10,
marginLeft:20,
},
icon:{

marginHorizontal:5

},
})