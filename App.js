import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Header from './components/Header';
import 'react-native-get-random-values';
// import { nanoid } from 'nanoid';
import { uuid } from 'uuidv4';
// import nanoid from 'nanoid';

// console.log(id)

// flex in react native will default to column instead of row, flex param only supports single num
const App = () => {
  const [items, setItems] = useState([])
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