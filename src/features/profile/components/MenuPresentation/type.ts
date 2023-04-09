import {Dispatch, SetStateAction} from 'react';

import {IPresentationInListResponse} from '@app/api/rest/presentation/type';

export interface IProps {
  presentation: IPresentationInListResponse;
  setModalDeleteVisible: Dispatch<SetStateAction<boolean>>;
  setModalRenameVisible: Dispatch<SetStateAction<boolean>>;
}
