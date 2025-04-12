import React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

export function Share2({
  color = 'currentColor',
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-share"
      {...props}
    >
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M3 12a3 3 0 106 0 3 3 0 10-6 0M15 6a3 3 0 106 0 3 3 0 10-6 0M15 18a3 3 0 106 0 3 3 0 10-6 0M8.7 10.7l6.6-3.4M8.7 13.3l6.6 3.4" />
    </Svg>
  );
}
