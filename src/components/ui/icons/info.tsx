import React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

export function Info({
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"
      {...props}
    >
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0M12 9h.01" />
      <Path d="M11 12h1v4h1" />
    </Svg>
  );
}
