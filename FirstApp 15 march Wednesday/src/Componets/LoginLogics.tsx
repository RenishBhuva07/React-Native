import {Component} from "react";
import {View} from "react-native/types";
import LoginUI from './LoginUI';

interface IProps {}
interface IState {
    phoneNumber: string;
    otp: string[];
    activeIndex: any;
    isFocused: boolean;
}

class LoginLogics extends Component<IProps, IState>{

    // Constructor
    constructor (prop: IState) {
        super(prop);

        this.state = {
            phoneNumber: '',
            otp: ['', '', '', ''],
            activeIndex: '',
            isFocused: false,
        };
    }


    render() {
        return (
            <View>
                <LoginUI  />
            </View>
        );
    }
}