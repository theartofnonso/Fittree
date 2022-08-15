import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ShareSvg = props => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.333 3v2h-5v14h14v-5h2v6a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6Zm7.586 2h-4.586V3h8v8h-2V6.414l-7 7L10.919 12l7-7Z"
      fill="#312F2E"
    />
  </Svg>
);

export default ShareSvg;
