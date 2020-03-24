import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

// flex in react native will default to column instead of row, flex param only supports single num
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <Image source={{uri: 'https://randomuser.me/api/portraits/women/60.jpg'}} style={styles.img}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'pink',
    fontSize: 30,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
})
export default App;