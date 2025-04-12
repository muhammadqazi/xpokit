import { useRouter } from 'expo-router';

import { OTPForm, type OTPProps } from '@/components/auth/otp-form';
import { FocusAwareStatusBar } from '@/components/ui';
import { useAuth } from '@/lib';

export default function OTP() {
  const router = useRouter();
  const signIn = useAuth.use.signIn();

  const onSubmit: OTPProps['onSubmit'] = (data) => {};
  return (
    <>
      <FocusAwareStatusBar />
      <OTPForm onSubmit={onSubmit} />
    </>
  );
}
