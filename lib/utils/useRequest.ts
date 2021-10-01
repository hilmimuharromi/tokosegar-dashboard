import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const baseUrl = "http://localhost:5000";

export const useGetProducts = (path: any) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = baseUrl + path;

  const { data, error } = useSWR(url, fetcher);

  return { products: data, error };
};


export const useGetCategories = (path: any) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = baseUrl + path;

  const { data: categories, error,  } = useSWR(url, fetcher);

  return { categories, error,  };
};
