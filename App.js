
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Post from './src/components/Post';

export default function App() {
  return (
    <View style={styles.contener}>
        <ScrollView>
        <Post  name={"yahia"} imagepro="https://th.bing.com/th?q=%d8%b5%d9%88%d8%b1+%d8%b1%d8%ac%d9%84+%d8%a8%d8%b1%d9%88%d9%81%d8%a7%d9%8a%d9%84&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-WW&cc=IL&setlang=en&adlt=moderate&t=1&mw=247" imagepost="https://th.bing.com/th/id/OIP.c0nNqWBaQorj0g8l6Z4gZgAAAA?w=159&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"/>

        

        </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
contener:{

    flex:1,
}


});

