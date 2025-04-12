import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import React, { useRef } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Text as RNText,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as yup from 'yup';

import { Button, Text } from '@/components/ui';

import { Back } from '../ui/icons';

const schema = yup.object({
  otp: yup
    .string()
    .length(6, 'OTP must be exactly 6 digits')
    .matches(/^\d{6}$/, 'OTP must be numeric')
    .required('OTP is required'),
});

export type FormType = yup.InferType<typeof schema>;

export type OTPProps = {
  onSubmit: SubmitHandler<FormType>;
};

export const OTPForm = ({ onSubmit = () => { } }: OTPProps) => {
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormType>({
    resolver: yupResolver(schema),
  });

  const [otp, setOtp] = React.useState(['', '', '', '', '', '']);
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleInputChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    setValue('otp', newOtp.join(''));

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleSubmitForm = () => {
    const enteredOtp = otp.join('');
    console.log('OTP Submitted:', enteredOtp);
    onSubmit({ otp: enteredOtp });
  };

  return (
    <KeyboardAvoidingView
      className="dark:bg-background-50 flex-1 "
      behavior="padding"
      keyboardVerticalOffset={10}
    >
      <View className="dark:bg-background-50 mt-10 flex-1 p-6">
        <TouchableOpacity onPress={() => router.back()}>
          <Back />
        </TouchableOpacity>
        <View className="mt-10 flex-1">
          <View className="justify-center">
            <Text testID="form-title" className="pb-2 text-4xl font-bold">
              One Time Password Auth
            </Text>
            <Text className="mb-6 max-w-xs text-lg text-gray-500 dark:text-gray-300">
              Enter the 6-digit code sent to your email or phone number.
            </Text>
          </View>

          <View className="flex-row justify-between">
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputs.current[index] = ref)}
                value={digit}
                onChangeText={(value) => handleInputChange(value, index)}
                onKeyPress={({ nativeEvent: { key } }) =>
                  handleKeyPress(key, index)
                }
                keyboardType="numeric"
                maxLength={1}
                className="size-14 rounded-3xl border border-gray-300 text-center text-xl font-medium"
              />
            ))}
          </View>

          {errors.otp && (
            <RNText className="ms-4 mt-4 text-sm text-red-500">
              {errors.otp.message}
            </RNText>
          )}
        </View>

        <View className="pt-4">
          <Button
            testID="verify-button"
            label="Verify"
            onPress={handleSubmit(handleSubmitForm)}
            variant="primary"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
