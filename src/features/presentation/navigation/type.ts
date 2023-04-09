import {ISlideResponse} from '@app/api/rest/presentation/type';

export type ScreenParamsList = {
  slide: ISlideResponse;
  countSlides: number;
};

export type RouteParamsList = {
  [key in string]: ScreenParamsList | undefined;
};
