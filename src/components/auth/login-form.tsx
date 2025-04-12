import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import * as yup from 'yup';

import { Button, colors, ControlledInput, Text, View } from '@/components/ui';

import { Email, Password } from '../ui/icons';

const schema = yup.object({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

export type FormType = yup.InferType<typeof schema>;

export type LoginFormProps = {
  onSubmit?: SubmitHandler<FormType>;
  error?: string | null;
};

export const LoginForm = ({ onSubmit = () => { }, error }: LoginFormProps) => {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(schema),
  });

  return (
    <KeyboardAvoidingView
      className="flex-1 dark:bg-background-50 "
      behavior="padding"
      keyboardVerticalOffset={10}
    >
      <View className="mt-20 flex-1 p-6 dark:bg-background-50">
        <View className="flex-1">
          <View className="justify-center">
            <Text testID="form-title" className="pb-2 text-4xl font-bold">
              Sign in to your Account
            </Text>

            <Text className="mb-6 max-w-xs text-lg text-gray-500 dark:text-gray-300">
              Let's get you signed in.
            </Text>
          </View>

          <ControlledInput
            testID="email-input"
            control={control}
            name="email"
            label="Email"
            prefixIcon={
              <Email color={colors.neutral[400]} height={20} width={20} />
            }
            error={errors.email?.message}
          />
          <ControlledInput
            testID="password-input"
            control={control}
            name="password"
            label="Password"
            secureTextEntry={true}
            prefixIcon={
              <Password color={colors.neutral[400]} height={20} width={20} />
            }
            error={errors.password?.message}
          />

          {error && <Text className="mt-2 text-red-500">{error}</Text>}

          <View className="mt-4 flex-row justify-between">
            <Button
              label="Forgot Password"
              onPress={() => router.push('/auth/forgot-password')}
              className="mr-2"
              variant="outline"
              size="sm"
            />
            <Button
              label="Create Account"
              onPress={() => router.push('/auth/signup')}
              className="ml-2"
              variant="outline"
              size="sm"
            />
          </View>
        </View>

        <View className="pt-4">
          <Button
            testID="login-button"
            label="Login"
            onPress={handleSubmit(onSubmit)}
            variant="primary"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
