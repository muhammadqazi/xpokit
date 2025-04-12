import React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

export function BasketDiscount({
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-basket-discount"
      {...props}
    >
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M17 10l-2-6M7 10l2-6M12.5 20H7.244a3 3 0 01-2.965-2.544l-1.255-7.152A2 2 0 015.001 8H19a2 2 0 011.977 2.304l-.394 2.248M13.856 13.254A2 2 0 1012 16M16 21l5-5M21 21v.01M16 16v.01" />
    </Svg>
  );
}
