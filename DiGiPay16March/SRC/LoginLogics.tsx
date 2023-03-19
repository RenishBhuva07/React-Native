import { Component } from "react";
import { TextInput } from "react-native";
import LoginUI from "./LoginUI";

interface IProps {
    navigation: any
}
interface IState {
    mobilenumber: string;
    isFocused: boolean;
    error: string;
    // CheckValid: boolean
}

class LoginLogics extends Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);

        this.state = {
            mobilenumber: '',
            isFocused: false,
            error: '',
            // CheckValid: false
        };
    }


    handleMobileChange = (text: string) => {
        this.setState({ mobilenumber: text });

        const { mobilenumber } = this.state;
        if (mobilenumber.length == 9) {
            this.setState({ error: '' });
        }
    };
    handleFocus = () => {
        this.setState({ isFocused: true });

    };
    handleBlur = () => {
        this.setState({ isFocused: false });
        // console.warn("calledd");
    };
    // handler for "Get OTP" button press
    private otpInputs: TextInput[] = [];
    handleGetOTP = () => {
        const { mobilenumber } = this.state;

        if (mobilenumber.trim() === '') {
            this.setState({ error: 'Mobile Number Required' });
        } else if (!/^[0-9]+$/.test(mobilenumber)) {
            this.setState({ error: 'Invalid Phone Number' });
        } else if (mobilenumber.length < 10) {
            this.setState({ error: 'Must Be 10 Characters' });
        } else {
            this.setState({ error: '' });
            if (this.otpInputs[0]) {
                this.otpInputs[0].focus();
            }
        }


    };

    handleLoginAndValidate = () => {
        const { mobilenumber } = this.state;

        if (mobilenumber.trim() === '') {
            this.setState({ error: 'Mobile Number Required' });
        } else if (!/^[0-9]+$/.test(mobilenumber)) {
            this.setState({ error: 'Invalid Phone Number' });
        } else if (mobilenumber.length < 10) {
            this.setState({ error: 'Must Be 10 Characters' });
        } else {
            this.setState({ error: '', mobilenumber: '' });
            this.props.navigation.navigate('Dashboard')
            console.warn('Logged In');
        }

        // (this.state.CheckValid == true) ? this.props.navigation.navigate('Dashboard') : false;

    };

    // handleValidate = () => {
    //     const { mobilenumber } = this.state;

    //     if (mobilenumber.trim() === '') {
    //         this.setState({ error: 'Mobile Number Required', CheckValid: false });
    //     } else if (!/^[0-9]+$/.test(mobilenumber)) {
    //         this.setState({ error: 'Invalid Phone Number', CheckValid: false });
    //     } else if (mobilenumber.length < 10) {
    //         this.setState({ error: 'Must Be 10 Characters', CheckValid: false });
    //     } else {
    //         // do something on login button press, e.g. send mobileNumber to server
    //         this.setState({ error: '', mobilenumber: '', CheckValid: true });
    //         // this.setState({ mobilenumber: '' });
    //         // console.warn('Logged In');
    //     }
    // };

    render() {
        return (
            <>
                <LoginUI
                    isFocus={this.state.isFocused}
                    contactNumber={this.state.mobilenumber}
                    onChangeContactNumber={(text: string) => { this.handleMobileChange(text); }}
                    onGetFocus={() => this.handleFocus()}
                    onGetBlur={() => this.handleBlur()}
                    Error={this.state.error}
                    onGetOtp={() => { this.handleGetOTP(); }}

                    onPressLogin={() => { this.handleLoginAndValidate(); }}

                    OtpInputs={this.otpInputs}
                />
            </>
        );
    }

}

export default LoginLogics;

// https://code.tutsplus.com/tutorials/common-react-native-app-layouts-login-page--cms-27639
// https://medium.com/@mdeepikayadav029/side-menu-bar-after-login-screen-in-react-native-4cabee7ca2b0