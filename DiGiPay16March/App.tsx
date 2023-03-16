import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import LoginLogics from './SRC/LoginLogics';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginLogics />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'aqua',
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
});

export default App;
