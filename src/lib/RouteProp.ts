import React from 'react';
import {IStackScreenProps} from './StackScreenProps';

export interface IRouteProp {
  component: React.FunctionComponent<IStackScreenProps>;
  name: string;
}
