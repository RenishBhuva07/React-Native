import React, {Component, createRef} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

interface State {
    phoneNumber: string;
    otp: string[];
    activeIndex: number;
}

class OTPScreen extends Component<{}, State> {
    private phoneInput = createRef<TextInput>();
    private otpInputs: TextInput[] = [];

    state: State = {
        phoneNumber: '',
        otp: ['', '', '', ''],
        activeIndex: 0,
    };

    // handler for phone number change
    handlePhoneChange = (phoneNumber: string) => {
        this.setState({phoneNumber});
        if (this.phoneInput.current) {
            this.phoneInput.current.focus();
        }
    };

    // handler for OTP input change
    handleOTPChange = (text: string, index: number) => {
        const {otp} = this.state;
        otp[index] = text;
        this.setState({otp});
        if (text.length === 1 && index < 3 && this.otpInputs[index + 1]) {
            this.otpInputs[index + 1].focus();
        }
    };

    // handler for "Get OTP" button press
    handleGetOTP = () => {
        if (this.otpInputs[0]) {
            this.otpInputs[0].focus();
        }
    };

    // handler for OTP input box focus
    handleOTPBoxFocus = (index: number) => {
        this.setState({activeIndex: index});
    };

    // handler for OTP input box blur
    handleOTPBoxBlur = () => {
        this.setState({activeIndex: -1});
    };

    render() {
        const {phoneNumber, otp, activeIndex} = this.state;

        return (
            <View style={styles.container}>
                {/* phone number input */}
                <TextInput
                    style={[styles.textInput, phoneNumber ? styles.validInput : styles.invalidInput]}
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChangeText={this.handlePhoneChange}
                    ref={this.phoneInput}
                />
                {/* "Get OTP" button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.handleGetOTP}
                >
                    <Text style={styles.buttonText}>Get OTP</Text>
                </TouchableOpacity>
                {/* OTP input boxes */}
                <View style={styles.otpContainer}>
                    {otp.map((value, index) => (
                        <TextInput
                            key={index}
                            style={[styles.otpBox, activeIndex === index && styles.activeBox]}
                            value={value}
                            onChangeText={(text) => this.handleOTPChange(text, index)}
                            maxLength={1}
                            keyboardType="number-pad"
                            ref={(input) => {this.otpInputs[index] = input!;}}
                            onFocus={() => this.handleOTPBoxFocus(index)}
                            onBlur={this.handleOTPBoxBlur}
                        />))}
                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
    validInput: {
        borderColor: 'green',
    },
    invalidInput: {
        borderColor: 'gray',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
    otpContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    otpBox: {
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 5,
        width: 50,
    },
    activeBox: {
        borderColor: 'green',
    },
});

export default OTPScreen;


//         import React, {Component} from 'react';
// import {
//     View,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     TextInputProps,
//     PushNotificationIOS,
// } from 'react-native';
// import styles from './LoginStyleSheet';
// import login from './English';

// interface LoginPageProps {}

// interface LoginPageState {
//     phoneNumber: string;
//     error: string;
//     otp: string[];
// }

// const PIN_INPUT_COUNT = 4;

// class LoginClassCompo extends Component<LoginPageProps, LoginPageState> {
//     // private otpInputs: Array<TextInputProps | null>;

//     constructor (props: LoginPageProps) {
//         super(props);
//         this.state = {  
//             phoneNumber: '',
//             otp: [],
//             error: '',
//         };
//         // this.otpInputs = Array(PIN_INPUT_COUNT).fill(null);
//     }

//     // handlePhoneNumberChange = (p_num: string) => {
//     //   this.validatePhoneNumber(p_num);
//     // };

//     // validatePhoneNumber = (p_num: string) => {
//     //   let error = '';
//     //   if (p_num.length === 0) {
//     //     error = 'Phone Number is Required';
//     //   } else if (p_num.length > 10) {
//     //     error = 'Must Be 10 Characters';
//     //   } else if (!/^[0-9]+$/.test(p_num)) {
//     //     error = 'Invalid Phone Number';
//     //   }
//     //   this.setState({error});
//     // };

//     render() {
//         return (
//             <View>

//                 <Text style={styles.Heading}>{login.LOGIN_TITLE}</Text>

//                 {/* Phone Number Input Field */}
//                 <View style={styles.InputContainer}>
//                     <Text style={styles.label}>{login.Contact_Number_label}</Text>

//                     <TextInput
//                         style={styles.Phone}
//                         placeholder={login.PhoneNumber_placeholder}
//                         keyboardType="number-pad"
//                         // value={this.state.phoneNumber}
//                         // onBlur={() => this.validatePhoneNumber(this.state.phoneNumber)}
//                         // onChangeText={this.handlePhoneNumberChange}
//                         maxLength={10}
//                     />

//                     {/* {this.state.error ? <Text style={{color: 'red'}}>{this.state.error}</Text> : null} */}
//                 </View>

//             </View>
//         );
//     }
// }

// export default LoginClassCompo;
