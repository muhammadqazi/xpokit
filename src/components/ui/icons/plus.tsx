import { type SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export function Plus({
  color = '#000000',
  width = 24,
  height = 24,
  ...props
}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-text-plus"
      {...props}
    >
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M19 10H5M5 6h14M14 14H5M5 18h6M18 15v6M15 18h6" />
    </Svg>
  );
}
