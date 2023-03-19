import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from '../StyleSheet';

// interface IProps { }
interface IState {
    otp: string[];
    activeIndex: number,
}

export interface SendOtpProps {
    OTPInputs: any;
}

class OtpBox extends Component<SendOtpProps, IState> {
    constructor(props: SendOtpProps) {
        super(props);

        this.state = {
            otp: ['', '', '', ''],
            activeIndex: 0
        };
    }

    // private otpInputs: TextInput[] = [];

    handleOTPChange = (text: string, index: number) => {

        const { otp } = this.state;
        otp[index] = text;
        this.setState({ otp });
        if (text.length === 1 && index < 3 && this.props.OTPInputs[index + 1]) {
            this.props.OTPInputs[index + 1].focus();
        }
    }


    render() {

        return (
            <View style={styles.otpContainer}>
                {this.state.otp.map((value: any, index: number) => (
                    <TextInput
                        key={index}
                        // style={[styles.otpBox]}
                        style={styles.otpBox}
                        value={value}
                        maxLength={1}
                        keyboardType='number-pad'
                        ref={(input) => { this.props.OTPInputs[index] = input!; }}
                        onChangeText={(text: string) => this.handleOTPChange(text, index)}
                    >

                    </TextInput>
                ))}
            </View>
        )
    }
}

export default OtpBox;