import { type SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export function Dollar({
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
      <Path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
      <Path d="M12 3v3m0 12v3" />
    </Svg>
  );
}
