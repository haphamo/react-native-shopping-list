import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import 'react-native-get-random-values';

// flex in react native will default to column instead of row, flex param only supports single num
// function that creates a randomId
const randomId = function() {
  return Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);
}
// hardcoded initial state
const initalState = [
  {id: randomId(), text: 'Coffee'},
  {id: randomId(), text: 'Eggs'},
  {id: randomId(), text: 'Bananas'},
  {id: randomId(), text: 'Sweet Potato'},
]

const App = () => {
  const [items, setItems] = useState(initalState)

  // delete item function
  const deleteItem = (id) => {
    setItems(prevItems => {
      // returns a filtered array of items
      return prevItems.filter(item => item.id != id)
    })
  }
  // add item function, prepends newer items to the beginning
  const addItem = text => {
    setItems(prevItems => {
      return [{id: randomId(), text}, ...prevItems]
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
      <FlatList 
        data={items} 
        renderItem={( {item} ) => <ListItem item={item} deleteItem={deleteItem}/>}
        />
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