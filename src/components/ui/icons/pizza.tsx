import React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

export function Pizza({
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
      className="lucide lucide-pizza"
      {...props}
    >
      <Path d="M12 14l-1 1M13.75 18.25l-1.25 1.42M17.775 5.654a15.68 15.68 0 00-12.121 12.12M18.8 9.3a1 1 0 002.1 7.7" />
      <Path d="M21.964 20.732a1 1 0 01-1.232 1.232l-18-5a1 1 0 01-.695-1.232A19.68 19.68 0 0115.732 2.037a1 1 0 011.232.695z" />
    </Svg>
  );
}
