export type CreateCart = {
  id_user: number;
  id_book: number;
  qty: number;
};

export type UpdateCart = {
  id_cart: number;
  id_user: number;
  id_book: number;
  qty: number;
};
