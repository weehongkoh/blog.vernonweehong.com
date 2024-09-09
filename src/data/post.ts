const API_URL = process.env.DIRECTUS_API_URL + "/items/posts";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${process.env.DIRECTUS_API_KEY}`,
};

const options = {
  headers,
  next: { revalidate: 0 },
};

const handleFetchResponse = async (res: Readonly<Response>) => {
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }
  return await res.json();
};

export const fetchAllData = async () => {
  const res = await fetch(`${API_URL}?filter[status][_eq]=published`, options);
  return handleFetchResponse(res);
};

export const fetchData = async (slug: string) => {
  const res = await fetch(
    `${API_URL}?filter[status][_eq]=published&filter[slug][_eq]=${slug}`,
    options,
  );
  return handleFetchResponse(res);
};
