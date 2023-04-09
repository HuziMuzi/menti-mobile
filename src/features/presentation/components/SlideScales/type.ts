import {ISlideResponse} from '@app/api/rest/presentation/type';

export type Props = {
  slide: ISlideResponse;
};

export type FormData = {
  [key in string]: number;
};
