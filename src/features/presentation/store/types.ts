import {IPresentationResponse} from '@app/api/rest/presentation/type';

export interface IPresentationSlice {
  isLoading: boolean;
  error: number | undefined | null;
  presentation: IPresentationResponse | null;
}
