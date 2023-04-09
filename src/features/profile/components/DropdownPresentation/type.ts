import {Dispatch, SetStateAction} from 'react';

export interface IProps {
  children: React.ReactElement;
}

export interface IPosition {
  top: number;
  left: number;
}

export interface IContext {
  setDropdownVisible: Dispatch<SetStateAction<boolean>>;
}
