import * as React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

import colors from '../colors';

export const Email = ({ color = colors.black, ...props }: SvgProps) => {
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
      {...props}
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
      <Path d="M3 7l9 6l9 -6" />
    </Svg>
  );
};
