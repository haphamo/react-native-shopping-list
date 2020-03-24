import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

// flex in react native will default to column instead of row, flex param only supports single num
const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 16,
    backgroundColor: 'pink'
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center'
  }
})
export default Header;