import { useRouter } from 'expo-router';
import React from 'react';

import {
  SignupForm,
  type SignupFormProps,
} from '@/components/auth/signup-form';
import { FocusAwareStatusBar } from '@/components/ui';
import { useAuth } from '@/lib';

export default function Signup() {
  const router = useRouter();
  const signIn = useAuth.use.signIn();

  const onSubmit: SignupFormProps['onSubmit'] = (data) => {};

  return (
    <>
      <FocusAwareStatusBar />
      <SignupForm onSubmit={onSubmit} />
    </>
  );
}
