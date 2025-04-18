import * as React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

export function Weight({
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-weight"
      {...props}
    >
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M9 6a3 3 0 106 0 3 3 0 10-6 0" />
      <Path d="M6.835 9h10.33a1 1 0 01.984.821l1.637 9A1 1 0 0118.802 20H5.198a1 1 0 01-.984-1.179l1.637-9A1 1 0 016.835 9z" />
    </Svg>
  );
}
