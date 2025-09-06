
import {View, StyleSheet, Text, FlatList, Image, } from 'react-native';
import { Link } from 'expo-router';

export default function MarsPhotos() {
  
    return (
        <View style={styles.container}>           
           <Link href='https://nguyenminhtriec.github.io'>
              <Text style={{color:'lightblue', textDecorationLine:'underline'}}>About Us</Text>
           </Link>            
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
