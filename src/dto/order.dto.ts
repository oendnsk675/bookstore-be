export type CreateOrder = {
  id_order: number;
  id_user: number;
  id_book: number;
  status: number;
  price: number;
};

export type GetOrder = {
  id_order: number;
  id_user: number;
  id_book: number;
  status: number;
  price: number;
};
