import { type SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export function Stack({
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
      <Path d="M12 2l-8 4l8 4l8 -4l-8 -4" />
      <Path d="M4 10l8 4l8 -4" />
      <Path d="M4 18l8 4l8 -4" />
      <Path d="M4 14l8 4l8 -4" />
    </Svg>
  );
}
