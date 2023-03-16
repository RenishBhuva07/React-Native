import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from '../StyleSheet';

export interface SendOtpProps {
    pin: Array<string>;
    handleOTPChange: (text: string, index: number) => void;
    // handleOTPFocus: (index: number) => void;
}

class OtpBox extends Component<SendOtpProps> {
    constructor (props: SendOtpProps) {
        super(props);
        //     this.state = {
        //  ,
        //     };
    }
    render() {
        const {
            handleOTPChange,
            // handleOTPFocus
        } = this.props;
        return (
            <View style={styles.otpContainer}>
                {this.props.pin.map((value, index) => (
                    <TextInput
                        key={index}
                        style={[styles.otpBox]}
                        // style={[styles.otBox, activeIndex === index && styles.activeBox]}
                        value={value}
                        onChangeText={(text) => handleOTPChange(text, index)}
                        maxLength={1}
                        keyboardType="number-pad"
                        // ref={(input) => {this.otpInputs[index] = input!;}}
                        // onFocus={() => handleOTPFocus(index)}
                    // onBlur={this.handleOTPBoxBlur}
                    />))}
            </View>
        );
    }
}

export default OtpBox;

