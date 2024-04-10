export interface AddBook {
  id_book?: number;
  title: string;
  alt_title: string;
  writer: string;
  cover_image: string;
  price: number;
  olid: string;
  id_tag: number;
}

export interface GetBook {
  id_book?: number;
  title: string;
  alt_title: string;
  writer: string;
  cover_image: string;
  price: number;
  olid: string;
  tags: string;
}
