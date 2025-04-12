import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import * as Yup from 'yup';

import {
  Button,
  Checkbox,
  colors,
  ControlledInput,
  ControlledSelect,
  Text,
  TouchableOpacity,
  View,
} from '@/components/ui';

import { Back, Email, Password, Phone, Profile } from '../ui/icons';

const schema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  privacyPolicy: Yup.boolean().oneOf(
    [true],
    'You must agree to the privacy policy'
  ),
  phone: Yup.string().required('Phone number is required'),
  userType: Yup.string().required('User type is required'),
});

export type FormType = Yup.InferType<typeof schema>;

export type SignupFormProps = {
  onSubmit?: SubmitHandler<FormType>;
  error?: string | null;
};

export const SignupForm = ({ onSubmit = () => {}, error }: SignupFormProps) => {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(schema),
  });

  const [isPasswordVisible, setPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const privacyPolicyChecked = watch('privacyPolicy');

  const userTypeOptions = [
    { label: 'Buyer', value: 'buyer' },
    { label: 'Seller', value: 'seller' },
  ];

  return (
    <KeyboardAvoidingView
      className="dark:bg-background-50 flex-1 p-6"
      behavior="padding"
      keyboardVerticalOffset={10}
    >
      <View className="mt-6 flex-1 justify-between">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Back />
        </TouchableOpacity>
        <View>
          <View className="justify-center">
            <Text testID="form-title" className="pb-2 text-3xl font-bold">
              Create Your Account
            </Text>
            <Text className="mb-6 max-w-xs text-lg text-gray-500 dark:text-gray-300">
              Let's get you signed up.
            </Text>
          </View>

          <ControlledInput
            control={control}
            name="fullName"
            label="Full Name"
            prefixIcon={
              <Profile color={colors.neutral[400]} height={20} width={20} />
            }
          />

          <ControlledInput
            testID="email-input"
            control={control}
            name="email"
            label="Email"
            prefixIcon={
              <Email color={colors.neutral[400]} height={20} width={20} />
            }
          />

          <ControlledInput
            testID="password-input"
            control={control}
            name="password"
            label="Password"
            secureTextEntry={!isPasswordVisible}
            prefixIcon={
              <Password color={colors.neutral[400]} height={20} width={20} />
            }
          />

          <ControlledInput
            control={control}
            name="confirmPassword"
            label="Confirm Password"
            secureTextEntry={true}
            showEyeIcon={true}
            prefixIcon={
              <Password color={colors.neutral[400]} height={20} width={20} />
            }
            onEyePress={togglePasswordVisibility}
          />

          <ControlledInput
            control={control}
            name="phone"
            label="Phone Number"
            prefixIcon={
              <Phone color={colors.neutral[400]} height={20} width={20} />
            }
          />

          <ControlledSelect
            control={control}
            name="userType"
            options={userTypeOptions}
            placeholder="Select User Type"
          />

          <View className="mt-4">
            <Text className="font-medium text-gray-700">
              Password must include:
            </Text>
            <View className="ml-4 mt-2">
              <Text className="text-gray-600">• At least 6 characters</Text>
              <Text className="text-gray-600">
                • A mix of uppercase and lowercase letters
              </Text>
              <Text className="text-gray-600">• At least one number</Text>
              <Text className="text-gray-600">
                • At least one special character
              </Text>
            </View>
          </View>
        </View>

        {error && <Text className="mt-2 text-red-500">{error}</Text>}

        <View className="mt-10">
          <Checkbox
            checked={privacyPolicyChecked}
            onChange={(value) => {
              setValue('privacyPolicy', value);
            }}
            label={
              <Text>
                I agree to provide correct information and accept the{' '}
                <Text className="text-blue-500 underline">Privacy Policy</Text>{' '}
                and{' '}
                <Text className="text-blue-500 underline">Terms of Use</Text>.
              </Text>
            }
          />
          {errors.privacyPolicy && (
            <Text className="mt-2 text-red-500">
              {errors.privacyPolicy.message}
            </Text>
          )}
        </View>

        <View className="mb-6">
          <Button
            label="Create Account"
            onPress={handleSubmit(onSubmit)}
            variant="primary"
            disabled={!privacyPolicyChecked}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
