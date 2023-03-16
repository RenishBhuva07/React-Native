import { Component } from "react";
import { Text, TextInput } from "react-native";
import LoginUI from "./LoginUI";

interface IProps { }
interface IState {
    mobilenumber: string;
    isFocused: boolean;
    otp: string[];
    error: string
}

class LoginLogics extends Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);

        this.state = {
            mobilenumber: '',
            isFocused: false,
            otp: ['', '', '', ''],
            error: '',
        };
    }
    handleMobileChange = (text: string) => {
        this.setState({ mobilenumber: text });
    };
    handleFocus = () => {
        this.setState({ isFocused: true });
    };
    handleBlur = () => {
        this.setState({ isFocused: false });
    };
    // handler for "Get OTP" button press
    private otpInputs: TextInput[] = [];
    handleGetOTP = () => {
        if (this.otpInputs[0]) {
            this.otpInputs[0].focus();
        }
    };
    handleOTPChange = (text: string, index: number) => {
        const { otp } = this.state;
        otp[index] = text;
        this.setState({ otp });
        if (text.length === 1 && index < 3 && this.otpInputs[index + 1]) {
            this.otpInputs[index + 1].focus();
        }
    };
    // handler OTP Boxes Focuse 
    // handleOTPBoxFocus = (index: number) => {
    //     this.setState({activeIndex: index});
    // };
    // // handler OTP Boxes Blur 
    // handleOTPBoxBlur = () => {
    //     this.setState({activeIndex: -1});
    // };
    handleLoginAndValidate = () => {
        const { mobilenumber } = this.state;

        if (mobilenumber.trim() === '') {
            this.setState({ error: 'Mobile Number Required' });
        } else if (mobilenumber.length < 10) {
            this.setState({ error: 'Must Be 10 Characters' });
        } else {
            // do something on login button press, e.g. send mobileNumber to server
            console.warn('Logging in with mobile number' + mobilenumber);
        }
    };

    render() {
        return (
            <>
                <LoginUI
                    isFocus={this.state.isFocused}
                    contactNumber={this.state.mobilenumber}
                    onChangeContactNumber={(text: string) => { this.handleMobileChange(text); }}
                    onGetFocus={() => { this.handleFocus; }}
                    onGetBlur={() => { this.handleBlur; }}
                    Error={this.state.error}

                    onGetOtp={() => { this.handleGetOTP; }}
                    pin={this.state.otp}
                    onChangeOtp={() => this.handleOTPChange}
                    // onOtpFocus={() => {this.handleOTPBoxFocus;}}
                    // onOtpBlur={() => {this.handleOTPBoxBlur;}}
                    onPressLogin={() => { this.handleLoginAndValidate }}



                />
                {/* <Text>{this.state.isFocused}</Text> */}
            </>
        );
    }

}

export default LoginLogics;