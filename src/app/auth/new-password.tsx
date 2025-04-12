import { useRouter } from 'expo-router';
import React from 'react';

import {
  NewPasswordForm,
  type NewPasswordProps,
} from '@/components/auth/new-password-form';
import { FocusAwareStatusBar } from '@/components/ui';
import { useAuth } from '@/lib';

export default function NewPassword() {
  const router = useRouter();
  const signIn = useAuth.use.signIn();

  const onSubmit: NewPasswordProps['onSubmit'] = (data) => {};

  return (
    <>
      <FocusAwareStatusBar />
      <NewPasswordForm onSubmit={onSubmit} />
    </>
  );
}
