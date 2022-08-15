import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const InformationSvg = props => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12.333 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16.001 8 8 0 0 0 0 16.001Zm-1-13h2v2h-2V7Zm0 4h2v6h-2v-6Z"
      fill="#312F2E"
    />
  </Svg>
);

export default InformationSvg;
