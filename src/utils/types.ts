export interface IOrderItem {
  name: string;
  image: any;
  minPrice?: number;
  maxPrice?: number;
}

export interface IDelete {
  url: string;
  body?: any;
}

export interface IPost extends IDelete {
  body?: string;
}

export type IPatch = IPost;

export type IPut = IPost;

export interface IGet extends IDelete {
  query?: Record<string, any>;
}

export interface IResponse<D> {
  data?: D;
  code?: number;
  message?: string;
}

export interface IDocument {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
