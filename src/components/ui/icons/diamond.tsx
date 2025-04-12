import React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

export function Diamond({
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
      className="lucide lucide-gem"
      {...props}
    >
      <Path d="M6 3h12l4 6-10 13L2 9z" />
      <Path d="M11 3L8 9l4 13 4-13-3-6M2 9h20" />
    </Svg>
  );
}
