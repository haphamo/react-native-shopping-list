import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

// flex in react native will default to column instead of row, flex param only supports single num
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
   
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})
export default App;