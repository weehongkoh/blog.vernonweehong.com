export type PostDataProp = {
  data: PostProp[] | PostProp;
};

export type PostProp = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  categories: string[];
  date_created: string;
  date_updated: string;
};
