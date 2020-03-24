import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Header from './components/Header'
// flex in react native will default to column instead of row, flex param only supports single num
const App = () => {
  return (
    <View style={styles.container}>
      <Header />
   
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },

})
export default App;