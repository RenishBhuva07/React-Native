import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Heading: {
    marginVertical: 50,
    color: 'red',
    fontSize: 45,
    textAlign: 'center',
  }, label: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  textInput: {
    textAlign: 'center',
    borderWidth: 2,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    fontSize: 20,
    borderColor: 'white',
    color: 'white'
  },
  focusedInput: {
    borderColor: 'red',
  },
  bluredInput: {
    borderColor: 'white',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    width: 200,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  otpBox: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'white',
    // padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    width: 50,
    fontSize: 20,
  },
  activeBox: {
    color: 'white',
    borderColor: 'red',
  },
  // -----------------
  // InputContainer: {
  //   backgroundColor: 'white',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 10,
  //   borderColor: 'black',
  //   padding: 10,
  //   margin: 10,
  // },
  // Phone: {
  //   textAlign: 'center',
  //   backgroundColor: 'aliceblue',
  //   fontSize: 25,
  //   borderWidth: 2,
  //   borderRadius: 5,
  //   margin: 10,
  //   paddingHorizontal: 50,
  //   width: 300,
  // },
  // OTP: {
  //   textAlign: 'center',
  //   backgroundColor: 'aliceblue',
  //   fontSize: 25,
  //   borderWidth: 2,
  //   borderRadius: 5,
  //   //   borderColor: 'black',
  //   margin: 10,
  //   paddingHorizontal: 18,
  // },
  // OtpContainer: {
  //   display: 'flex',
  //   flexDirection: 'row',
  // },
  // bttn: {
  //   backgroundColor: 'red',
  //   color: 'white',
  //   borderRadius: 10,
  // },
  // getOTP: {
  //   textAlign: 'center',
  //   width: 200,
  //   paddingVertical: 10,
  //   margin: 10,
  // },
  verifyOTP: {
    marginTop: 200,
  },
  // focusInput: {
  //   borderColor: 'blue',
  //   // borderWidth:2,
  // },
});

export default styles;
