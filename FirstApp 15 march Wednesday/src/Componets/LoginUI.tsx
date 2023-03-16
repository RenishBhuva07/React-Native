import React, {Component, createRef} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import login from './English';
import styles from './LoginStyleSheet';

// interface LoginPageState {
//   phoneNumber: string;
//   otp: string[];
//   activeIndex: any;
//   isFocused: boolean;
// }

// interface LoginProps {}

export interface SendUIProps {
  
}

// Login Class Component Start------------------------------------------------------------
class LoginUI extends Component(props: SendUIProps) {
  // private phoneInput = createRef<TextInput>();
  private otpInputs: TextInput[] = [];

  // Constructor
  // constructor(prop: LoginProps) {
  //   super(prop);

  //   this.state = {
  //     phoneNumber: '',
  //     otp: ['', '', '', ''],
  //     activeIndex: '',
  //     isFocused: false,
  //   };
  // }

  // Handler for phone number change
  handlePhoneChange = (phoneNumber: string) => {
    this.setState({phoneNumber});
    // if (this.phoneInput.current) {
    //   const Error_Color = styles.invalidInput;
    //   // this.phoneInput.current.focus();

    // } else {
    //   // this.phoneInput.current.blur();

    // }
  };

  // handler for "Get OTP" button press
  handleGetOTP = () => {
    if (this.otpInputs[0]) {
      this.otpInputs[0].focus();
    }
  };

  handleOTPChange = (text: string, index: number) => {
    const {otp} = this.state;
    otp[index] = text;
    this.setState({otp});
    if (text.length === 1 && index < 3 && this.otpInputs[index + 1]) {
      this.otpInputs[index + 1].focus();
    }
  };

  handleOTPBoxFocus = (index: number) => {
    this.setState({activeIndex: index});
  };

  handleOTPBoxBlur = () => {
    this.setState({activeIndex: -1});
  };

  handleVerifyOTP = () => {
    this.setState({
      phoneNumber: '',
      otp: ['', '', '', ''],
      activeIndex: '',
    });
  };

  render() {
    const {phoneNumber, otp, activeIndex, isFocused} = this.state;
    const Error_Color = isFocused ? styles.focusedInput : styles.bluredInput;

    const {} = this.props;

    return (
      <View>
        {/* Heading */}
        <Text style={styles.Heading}>{login.LOGIN_TITLE}</Text>

        {/* Phone Number TextInput */}
        <Text style={styles.label}>{login.Contact_Number_label}</Text>
        <TextInput
          style={[styles.textInput, Error_Color]}
          placeholderTextColor={'red'}
          placeholder={login.PhoneNumber_placeholder}
          onChangeText={this.handlePhoneChange}
          onFocus={() => {
            this.setState({isFocused: true});
          }}
          onBlur={() => {
            this.setState({isFocused: false});
          }}
          keyboardType="number-pad"
          maxLength={10}
        />

        {/* Get OTP Button */}
        <TouchableOpacity style={styles.button} onPress={this.handleGetOTP}>
          <Text style={styles.buttonText}>{login.Get_Otp_Button}</Text>
        </TouchableOpacity>

        {/* OTP Pin Boxes */}
        <View style={styles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              style={[styles.otpBox, activeIndex === index && styles.activeBox]}
              value={value}
              onChangeText={text => this.handleOTPChange(text, index)}
              maxLength={1}
              keyboardType="number-pad"
              ref={input => {
                this.otpInputs[index] = input!;
              }}
              onFocus={() => this.handleOTPBoxFocus(index)}
              onBlur={this.handleOTPBoxBlur}
            />
          ))}
        </View>

        {/* Verify OTP Button */}
        <TouchableOpacity
          style={[styles.button, styles.verifyOTP]}
          onPress={this.handleVerifyOTP}>
          <Text style={styles.buttonText}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginUI;
