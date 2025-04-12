//Old login page
import { useRouter } from 'expo-router';
import React from 'react';

import {
  ForgotPasswordForm,
  type ForgotPasswordProps,
} from '@/components/auth/forgot-password-form';
import { FocusAwareStatusBar } from '@/components/ui';

export default function ForgotPassword() {
  const router = useRouter();

  const onSubmit: ForgotPasswordProps['onSubmit'] = (data) => {
    console.log(data);
    router.push('/auth/otp');
  };
  return (
    <>
      <FocusAwareStatusBar />
      <ForgotPasswordForm onSubmit={onSubmit} />
    </>
  );
}
