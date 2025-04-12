import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import * as yup from 'yup';

import {
  Button,
  colors,
  ControlledInput,
  Text,
  TouchableOpacity,
  View,
} from '@/components/ui';

import { Back, Password } from '../ui/icons';

const schema = yup.object({
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

export type FormType = yup.InferType<typeof schema>;

export type NewPasswordProps = {
  onSubmit?: SubmitHandler<FormType>;
};

export const NewPasswordForm = ({ onSubmit = () => { } }: NewPasswordProps) => {
  const router = useRouter();

  const { handleSubmit, control } = useForm<FormType>({
    resolver: yupResolver(schema),
  });

  const [isPasswordVisible, setPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    <KeyboardAvoidingView
      className="dark:bg-background-50 flex-1 "
      behavior="padding"
      keyboardVerticalOffset={10}
    >
      <View className="dark:bg-background-50 mt-10 flex-1 p-6">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Back />
        </TouchableOpacity>
        <View className="mt-10 flex-1">
          <View className="justify-center">
            <Text testID="form-title" className="pb-2 text-4xl font-bold">
              Change your Password
            </Text>

            <Text className="mb-6 max-w-xs text-lg text-gray-500 dark:text-gray-300">
              Add a new password to your account.
            </Text>
          </View>

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
        </View>

        <View className="pt-4">
          <Button
            testID="login-button"
            label="Change Password"
            onPress={handleSubmit(onSubmit)}
            variant="primary"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
