import { type SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export function Description({
  color = 'currentColor',
  width = 24,
  height = 24,
  strokeWidth = 2,
  ...props
}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <Path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
      <Path d="M9 17h6" />
      <Path d="M9 13h6" />
    </Svg>
  );
}
