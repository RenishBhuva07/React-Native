import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import Login from './Login';


function App() {

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>
        Hey Login..!
      </Text>
      <Login />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
    margin:'10',
  },
})

export default App;