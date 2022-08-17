import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Favicon(props) {
  return (
      <Svg
          width={100}
          height={100}
          id="a"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 877.5 877.5"
          {...props}>
          <Path
              className="b"
              d="M368.45 230.12h-79.32v66.19c23.88 18.39 50.71 32.05 79.32 40.53V230.12ZM586.47 230.12h-79.32v107.31c28.57-8.25 55.36-21.6 79.32-39.68v-67.63Z"
              fill="#ef7a75"
          />
          <Path
              className="b"
              d="M628.7 290.93a277.082 277.082 0 0 1-42.23 32.98c-24.5 15.52-51.21 27.06-79.32 34.14-22.07 5.61-45.02 8.52-68.4 8.52s-47.61-3.06-70.3-9.02a272.101 272.101 0 0 1-79.32-34.92 275.542 275.542 0 0 1-40.3-31.7c-1.86-1.74-3.68-3.52-5.46-5.3l-58.88 58.84c30.81 30.77 66.19 55.32 104.63 72.93v229.98h79.32V442.99c22.92 4.49 46.41 6.81 70.3 6.81s46.1-2.21 68.4-6.46v204.04h79.32V418.25c39.17-17.65 75.25-42.5 106.53-73.78l-58.84-58.84c-1.78 1.78-3.6 3.56-5.46 5.3Z"
              fill="#ef7a75"
          />
      </Svg>
  );
}

export default Favicon;
