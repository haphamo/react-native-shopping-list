import React from 'react';
import { View, Text } from 'react-native'

// flex in react native will default to column instead of row, flex param only supports single num
const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>Hello World</Text>
    </View>
  )
}

export default App;