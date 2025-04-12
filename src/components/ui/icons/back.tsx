import * as React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

import colors from '../colors';

export const Back = ({ color = colors.black, ...props }: SvgProps) => {
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
      {...props}
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M5 12l14 0" />
      <Path d="M5 12l6 6" />
      <Path d="M5 12l6 -6" />
    </Svg>
  );
};
