import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import theme from '@/theme';

type SvgProps = {
  width: number;
  height: number;
  fill?: string;
};

export const SearchIcon: FC<SvgProps> = ({ width, height, fill = theme.colors.infoContent }) => {
  return (
    <Svg viewBox="0 0 24 24" width={width} height={height} fill="transparent">
      <Path d="M17 17L21 21" stroke={fill} strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" />
      <Path
        d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
        stroke={fill}
        strokeWidth="2"
      />
    </Svg>
  );
};
