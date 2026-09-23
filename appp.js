import { View, Text, StyleSheet, Image } from 'react-native';
import Post from './src/components/Post';

export default function App() {
  return (
    <View style={styles.continir}>
      <View style={styles.w}>
      <Text style={styles.t}>WhatsApp</Text>
            <View style={styles.search}><Text style={styles.txt}>      search....    </Text></View>
            <View style={styles.yaya}>   
                   <View style={styles.all}><Text style={styles.ttt}>All</Text></View>
                   <View style={styles.unread}><Text style={styles.ttt}>Unread</Text></View>
                   <View style={styles.fav}><Text style={styles.ttt}>Favorites</Text></View>
                   <View style={styles.groups}><Text style={styles.ttt}>Groups</Text></View>
            </View>
            <Post2 time="12:30" name="yahia" image="https://th.bing.com/th/id/OIP.BgswW6L-57-3ZLxm1599KwHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" txt={"hii"}/>
            <Post2 time="12:30" name="yahia" image="https://th.bing.com/th/id/OIP.BgswW6L-57-3ZLxm1599KwHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" txt={"hii"}/>
            <Post2 time="12:30" name="yahia" image="https://th.bing.com/th/id/OIP.BgswW6L-57-3ZLxm1599KwHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" txt={"hii"}/>
            <Post2 time="12:30" name="yahia" image="https://th.bing.com/th/id/OIP.BgswW6L-57-3ZLxm1599KwHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" txt={"hii"}/>
            <Post2 time="12:30" name="yahia" image="https://th.bing.com/th/id/OIP.BgswW6L-57-3ZLxm1599KwHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" txt={"hii"}/>
      </View>
      
      <Image source={require("../MyApp/assets/screen.png")} style={styles.imgscreen}/>
    </View>
  );
}

const styles = StyleSheet.create({

  continir: {
    backgroundColor:"white",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  
  w:{
    marginTop:50,
    width:380,
    height:90,
    alignItems:"flex-end",        
  
  },
  t:{
    
    color:"green",
    fontSize:28,
    

  },
  
  


  search: {
    marginRight:30,
    margin:20,
    
    width: 320,
    height: 50,
    borderRadius: 60,
    alignItems:"flex-start",
    justifyContent: "center",
    backgroundColor:"#ece8e8",
  },

  yaya:{

    width:380,
    height:50,
    flexDirection:"row",
    alignItems:"center"
  },
  ttt:{

    fontSize:15,

  },

  all:{

    borderWidth:1,
    borderColor:"#ece8e8",
    borderRadius:20,
    width:40,
    height:30,
    marginLeft:10,
    justifyContent:"center",
    alignItems:"center"

  },
  unread:{
    borderWidth:1,
    borderRadius:20,
    borderColor:"#ece8e8",
    width:65,
    height:30,
    marginLeft:10,
    justifyContent:"center",
    alignItems:"center"

  },
  fav:{

    borderWidth:1,
    borderRadius:20,
    borderColor:"#ece8e8",
    width:80,
    height:30,
    marginLeft:10,
    justifyContent:"center",
    alignItems:"center"

  },

  groups:{

    borderWidth:1,
    borderRadius:20,
    borderColor:"#ece8e8",
    width:65,
    height:30,
    marginLeft:10,
    justifyContent:"center",
    alignItems:"center"

  },
  txt: {
    fontSize: 18,
  },

  imgscreen:{
    width:379,
    height:80

  },










});