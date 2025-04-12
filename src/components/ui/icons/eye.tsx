import Svg, { Path, type SvgProps } from 'react-native-svg';

import colors from '../colors';

export const Eye = ({ color = colors.black, ...props }: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icons-tabler-outline icon-tabler-eye"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    <Path d="M21 12c-2.4 4-5.4 6-9 6-3.6 0-6.6-2-9-6 2.4-4 5.4-6 9-6 3.6 0 6.6 2 9 6" />
  </Svg>
);
