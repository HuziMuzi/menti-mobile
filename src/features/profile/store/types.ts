import {
  IPresentationResponse,
  IPresentationInListResponse,
} from '@app/api/rest/presentation/type';

export interface IProfileSlice {
  isLoading: boolean;
  error: number | undefined | null;
  presentations: IPresentationInListResponse[];
  presentation: IPresentationResponse | null;
}
