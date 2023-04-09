export interface IPresentationInListResponse {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

interface IChoice {
  id: number;
  created_at: string;
  updated_at: string;
  order: number;
  label: string;
  image: unknown;
  correctAnswer: boolean;
}

export interface ISlideResponse {
  id: number;
  presentation: {
    id: number;
    author: {
      id: number;
    };
  };
  order: number;
  type: 'paragraph' | 'choices' | 'scales';
  heading: string;
  description: string;
  content: unknown;
  enableVoting: true;
  showResults: true;
  choices: Array<IChoice>;
  range: {
    min: number;
    max: number;
    labels: Array<string>;
  };
  layout: string;
  image: string;
  created_at: string;
  updated_at: string;
}

export interface ICreatePresentationRequest {
  name: string;
}

export interface IPresentationResponse {
  id: number;
  name: string;
  code: number;
  theme: string;
  author: {
    id: number;
  };
  slides: ISlideResponse[];
  created_at: string;
  updated_at: string;
}

export interface IUpdatePresentationRequest {
  id: string | number;
  presentation: {
    name: string;
  };
}
