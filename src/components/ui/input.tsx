import * as React from 'react';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { useController } from 'react-hook-form';
import type { TextInputProps } from 'react-native';
import {
  Animated,
  Easing,
  I18nManager,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { TextInput as NTextInput } from 'react-native';
import { tv } from 'tailwind-variants';

import colors from './colors';
import { Eye, EyeOff } from './icons';
import { Text } from './text';

const inputTv = tv({
  slots: {
    container: 'mb-6',
    label: 'text-grey-100 mb-1 text-lg dark:text-neutral-100',
    input:
      'mt-0 rounded-3xl border-[0.5px] border-neutral-300 bg-white p-4 font-inter text-base font-medium leading-5 dark:border-neutral-700 dark:bg-background-50 dark:text-white',
  },

  variants: {
    focused: {
      true: {
        input: 'border-neutral-400 dark:border-neutral-300',
      },
    },
    error: {
      true: {
        input: 'border-danger-600',
        label: 'text-danger-600 dark:text-danger-600',
      },
    },
    disabled: {
      true: {
        input: 'bg-neutral-200',
      },
    },
  },
  defaultVariants: {
    focused: false,
    error: false,
    disabled: false,
  },
});

export interface NInputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: string;
  prefixIcon?: React.ReactNode;
  showEyeIcon?: boolean;
  onEyePress?: () => void;
}

type TRule<T extends FieldValues> =
  | Omit<
    RegisterOptions<T>,
    'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >
  | undefined;

export type RuleType<T extends FieldValues> = { [name in keyof T]: TRule<T> };
export type InputControllerType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: RuleType<T>;
};

interface ControlledInputProps<T extends FieldValues>
  extends NInputProps,
  InputControllerType<T> { }

export const Input = React.forwardRef<NTextInput, NInputProps>((props, ref) => {
  const {
    label,
    error,
    testID,
    secureTextEntry,
    prefixIcon,
    showEyeIcon,
    onEyePress,
    ...inputProps
  } = props;
  const [isFocussed, setIsFocussed] = React.useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const onBlur = React.useCallback(() => setIsFocussed(false), []);
  const onFocus = React.useCallback(() => setIsFocussed(true), []);

  const focusAnim = React.useRef(new Animated.Value(0)).current;

  const inputRef = React.useRef<NTextInput>(null);
  React.useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocussed || !!inputProps.value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [focusAnim, isFocussed, inputProps.value]);

  const styles = React.useMemo(
    () =>
      inputTv({
        error: Boolean(error),
        focused: isFocussed,
        disabled: Boolean(props.disabled),
      }),
    [error, isFocussed, props.disabled]
  );

  return (
    <View className={styles.container()}>
      <View
        style={{
          position: 'relative',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.05,
          shadowRadius: 3.5,
          elevation: 2,
        }}
      >
        <NTextInput
          ref={ref}
          testID={testID}
          placeholderTextColor={colors.neutral[400]}
          className={styles.input()}
          onBlur={onBlur}
          onFocus={onFocus}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          {...inputProps}
          style={StyleSheet.flatten([
            { flex: 1 },
            { writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' },
            { textAlign: I18nManager.isRTL ? 'right' : 'left' },
            inputProps.style,
            { paddingLeft: prefixIcon ? 40 : 16 },
          ])}
        />
        <View
          style={{
            position: 'absolute',
            left: 10,
            top: '50%',
            transform: [{ translateY: -9 }],
          }}
        >
          {prefixIcon}
        </View>
        {showEyeIcon && (
          <TouchableWithoutFeedback
            onPress={() => {
              setIsPasswordVisible(!isPasswordVisible);
              onEyePress?.();
            }}
          >
            <View
              style={{
                position: 'absolute',
                right: 20,
                top: '50%',
                transform: [{ translateY: -12 }],
              }}
            >
              {isPasswordVisible ? <Eye /> : <EyeOff />}
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
      {error && (
        <Text
          testID={testID ? `${testID}-error` : undefined}
          className="ms-5 mt-1 text-sm text-danger-400 dark:text-danger-600"
        >
          {error}
        </Text>
      )}
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <Animated.View
          className="bg-white dark:bg-background-50"
          style={[
            {
              position: 'absolute',
              top: isFocussed ? 0 : inputProps.value ? 0 : -6,
              paddingHorizontal: 8,
              justifyContent: 'center',
            },
            {
              transform: [
                {
                  scale: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.75],
                  }),
                },
                {
                  translateY: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [18, -12],
                  }),
                },
                {
                  translateX: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [prefixIcon ? 40 : 16, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <Text
            style={{
              color: colors.neutral[500],
              textAlign: 'center',
            }}
          >
            {label}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
});

export function ControlledInput<T extends FieldValues>(
  props: ControlledInputProps<T>
) {
  const { name, control, rules, ...inputProps } = props;

  const { field, fieldState } = useController({ control, name, rules });
  return (
    <Input
      ref={field.ref}
      autoCapitalize="none"
      onChangeText={field.onChange}
      value={(field.value as string) || ''}
      {...inputProps}
      error={fieldState.error?.message}
    />
  );
}
