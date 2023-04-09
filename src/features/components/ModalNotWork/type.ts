import {Dispatch, SetStateAction} from 'react';

export interface IProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}
