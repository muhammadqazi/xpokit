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

import { Back, Email } from '../ui/icons';

const schema = yup.object({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
});

export type FormType = yup.InferType<typeof schema>;

export type ForgotPasswordProps = {
  onSubmit?: SubmitHandler<FormType>;
};

export const ForgotPasswordForm = ({
  onSubmit = () => {},
}: ForgotPasswordProps) => {
  const router = useRouter();

  const { handleSubmit, control } = useForm<FormType>({
    resolver: yupResolver(schema),
  });

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
              Verify your Email
            </Text>

            <Text className="mb-6 max-w-xs text-lg text-gray-500 dark:text-gray-300">
              Let's verify your email
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
          />
        </View>

        <View className="pt-4">
          <Button
            testID="login-button"
            label="Confirm"
            onPress={handleSubmit(onSubmit)}
            variant="primary"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
