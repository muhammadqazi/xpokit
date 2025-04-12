import Svg, { Path, type SvgProps } from 'react-native-svg';

import colors from '../colors';

export const EyeOff = ({ color = colors.black, ...props }: SvgProps) => {
  return (
    <Svg
      width={props.width || 24}
      height={props.height || 24}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="icon icon-tabler icons-tabler-outline icon-tabler-eye-off"
    >
      <Path stroke="none" d="M0 0h24v24H0z" />
      <Path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
      <Path d="M16.681 16.673A8.717 8.717 0 0 1 12 18c-3.6 0-6.6-2-9-6 1.272-2.12 2.712-3.678 4.32-4.674m2.86-1.146A9.055 9.055 0 0 1 12 6c3.6 0 6.6 2 9 6-.666 1.11-1.379 2.067-2.138 2.87M3 3l18 18" />
    </Svg>
  );
};
