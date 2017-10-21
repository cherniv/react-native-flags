// @flow

import React from 'react';
import { Image } from 'react-native';
import * as flags from './flags';

type Props = {
  code: string,
  style?: any,
};

const Flag = ({ code, style }: Props) => {
  const flag = flags['flat'][`icons`][code];
  const unknownFlag = flags['flat'][`icons`]['unknown'];

  return (
    <Image
      source={flag || unknownFlag}
      style={style}
    />
  );
};

export default Flag;
