import * as React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

import colors from '../colors';

export const Phone = ({ color = colors.black, ...props }: SvgProps) => {
  return (
    <Svg
      width={props.width || 24}
      height={props.height || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-phone"
      {...props}
    >
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
    </Svg>
  );
};
