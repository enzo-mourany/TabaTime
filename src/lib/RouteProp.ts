import React from 'react';
import {IStackScreenProps} from './StackScreenProps';

export interface IRouteProps {
  component: React.FunctionComponent<IStackScreenProps>;
  name: string;
}
