import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
// import LoginPage from '../FirstApp/src/Componets/LoginPage';
import LoginClassCompo from './src/Componets/LoginUI';
import OTPScreen from './src/Componets/OTPScreen';
import OTPScreen2 from './src/Componets/OTPScreen2';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       {/* <LoginPage /> */}
//       <LoginClassCompo>
//     </View>
//   );
// };

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <LoginPage /> */}
        <LoginClassCompo />
        {/* <OTPScreen /> */}
        {/* <OTPScreen2 /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'aqua',
    justifyContent:'space-evenly',
  },
});

export default App;
