import React, {useRef, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './LoginStyleSheet';

const LoginPage = () => {
  const PIN_INPUT_COUNT = 4;

  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [otp, setOTP] = useState(['', '', '', '']);
  const otpInputs = useRef<TextInput[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  // const handleFocus = () => setIsFocused(true);
  // const handleBlur = () => setIsFocused(false);

  const handlePhoneNumberChange = (phoneNumber: string) => {
    validatePhoneNumber(phoneNumber);
    setPhoneNumber(phoneNumber);
    phoneNumber != '' ? setIsFocused(true) : setIsFocused(false);
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    if (phoneNumber.length === 0) {
      setError('Phone Number is Required');
    } else if (phoneNumber.length > 10) {
      setError('Must Be 10 Characters');
    } else if (!/^[0-9]+$/.test(phoneNumber)) {
      setError('Invalid Phone Number');
    } else {
      setError('');
    }
  };

  const handleGetOTP = () => {
    otpInputs.current[0].focus();
    // console.warn('OTP has been Sent');
    // setPhoneNumber('');
  };

  const handleOTPChange = (index: number, value: string) => {
    const newOTP = [...otp];
    newOTP[index] = value;

    setOTP(newOTP);

    if (value && index < PIN_INPUT_COUNT - 1) {
      otpInputs.current[index + 1].focus();
      // otpInputs.current[index + 1].setIsFocused('true');
    }
  };

  const handleVerifyOTP=()=>{
    setPhoneNumber('');
    setOTP([]);
    setIsFocused(false);
    // console.warn('OTP has been Verified');
  }

  const handleInputFocus = (index: number) => {
    const newOtp = [...otp];
    newOtp[index] = '';
    setOTP(newOtp);
  };

  const handleInputBlur = (index: number) => {
    const newOtp = [...otp];
    if (!newOtp[index]) {
      newOtp[index-1] = '';
    }
    setOTP(newOtp);
  };

  return (
    <View>
      <Text style={styles.Heading}>LogiN</Text>

      {/* Phone Number Input Field */}
      <View style={styles.InputContainer}>
        <Text style={styles.label}>Contact Number :</Text>
        <TextInput
          style={[styles.Phone, isFocused && styles.focusInput]}
          placeholder="Enter Number"
          keyboardType="number-pad"
          value={phoneNumber}
          onBlur={phoneNumber => validatePhoneNumber(phoneNumber)}
          onChangeText={phoneNumber => handlePhoneNumberChange(phoneNumber)}
          maxLength={10}
          // onFocus={handleFocus}
          // onBlur={handleBlur}
        />
        {error ? <Text style={{color: 'red'}}>{error}</Text> : null}

        {/* Get OTP Button */}
        <TouchableOpacity onPress={handleGetOTP}>
          <Text style={[styles.bttn, styles.getOTP]}>Get OTP</Text>
        </TouchableOpacity>

        {/* OTP Container */}
        <View style={styles.OtpContainer}>
          {Array.from({length: PIN_INPUT_COUNT}).map((_, index) => (
            <TextInput
              key={index}
              ref={ref => (otpInputs.current[index] = ref!)}
              value={otp[index]}
              onChangeText={value => handleOTPChange(index, value)}
              onFocus={() => handleInputFocus(index)}
              onBlur={() => handleInputBlur(index)}
              keyboardType="number-pad"
              style={[styles.OTP, otp[index] && styles.focusInput]}
              maxLength={1}
            />
          ))}
        </View>

        {/* Verify OTP Button */}
        <TouchableOpacity onPress={handleVerifyOTP}>
          <Text style={[styles.bttn, styles.verifyOTP]}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;
