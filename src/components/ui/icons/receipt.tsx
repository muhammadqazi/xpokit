import React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

export function Receipt({
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-receipt"
      {...props}
    >
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16l-3-2-2 2-2-2-2 2-2-2-3 2M9 7h6m-6 4h6m-2 4h2" />
    </Svg>
  );
}
