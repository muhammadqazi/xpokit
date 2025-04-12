import * as React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

export function ChevronRight({
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
      {...props}
    >
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M9 6l6 6-6 6" />
    </Svg>
  );
}
