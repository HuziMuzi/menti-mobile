import {Dispatch, SetStateAction} from 'react';

import {IPresentationInListResponse} from '@app/api/rest/presentation/type';

export interface IProps {
  presentation: IPresentationInListResponse;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}
