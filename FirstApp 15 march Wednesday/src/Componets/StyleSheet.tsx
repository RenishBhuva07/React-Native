import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Heading: {
    color: 'white',
    fontSize: 45,
    textAlign: 'center',
  },
  label: {
    fontSize: 25,
    textAlign: 'center',
  },
  InputContainer: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'black',
    padding: 10,
    margin: 10,
  },
  linearGradient: {
    flex: 1,
  },
Phone: {
    textAlign: 'center',
    backgroundColor: 'aliceblue',
    fontSize: 25,
    borderWidth: 2,
    borderRadius: 5,
    // borderColor: 'black',
    margin: 10,
    paddingHorizontal: 50,
    width: 300,
},
OTP: {
      textAlign: 'center',
      backgroundColor: 'aliceblue',
      fontSize: 25,
      borderWidth: 2,
      borderRadius: 5,
    //   borderColor: 'black',
      margin: 10,
    paddingHorizontal: 18,
  },
  OtpContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  bttn: {
    borderColor: 'black',
    fontSize: 20,
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 10,
  },
  getOTP: {
    textAlign: 'center',
    width: 200,
    paddingVertical: 10,
    margin: 10,
  },
  verifyOTP: {
    textAlign: 'center',
    width: 200,
    paddingVertical: 10,
    margin: 10,
  },
  focusInput: {
    borderColor: 'blue',
    // borderWidth:2,
  },
});

export default styles;
