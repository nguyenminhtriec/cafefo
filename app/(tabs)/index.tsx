import { View, StyleSheet, Image } from "react-native";


export default function Index() {

  const PlaceholderImage = require('@/assets/images/bg-onthesand.png');
 
  return ( 
      <View style={styles.container}>
        <Image source={PlaceholderImage} style={{borderRadius: 16}} />
      </View>     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
    imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
    footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  
});
