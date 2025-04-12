import Svg, { Path, type SvgProps } from 'react-native-svg';

export function Transactions({
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-credit-card-pay"
      {...props}
    >
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M12 19H6a3 3 0 01-3-3V8a3 3 0 013-3h12a3 3 0 013 3v4.5M3 10h18M16 19h6M19 16l3 3-3 3M7.005 15h.005M11 15h2" />
    </Svg>
  );
}

export default Transactions;
