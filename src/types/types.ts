export type ImageType = {
  id: number;
  image: string;
};

export type ItemType = {
  id: number;
  slug: string;
  title: string;
  image: string;
  text: string;
  text_2: string;
  size: string;
  price_ars: number;
  price_usd: number;
  author: string;
  quantity: number;
  stock: number;
  images: ImageType[];
};

export type InfoType = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state?: string;
  country?: string;
  zip: string;
  delv_type: string;
  pay_type: string;
};
