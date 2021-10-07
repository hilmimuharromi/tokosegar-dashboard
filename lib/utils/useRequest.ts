import useSWR from "swr";
import axios from 'axios'
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


export const uploadImage = async (file: any) => {
  const formData = new FormData()
  formData.append('image', file)
  let url = baseUrl + '/image'
  const {data} = await axios(url, {
    method: 'post',
    headers: {
      Authorization: "Client-Id f03b177713c1836"
    },
    data: formData
  })

  return data

}

export const deleteImage = async (id: string) => {
  let url = baseUrl + '/image'

  const {data} = await axios(`${url}/${id}`, {
    method: 'delete',
    headers: {
      Authorization: "Client-Id f03b177713c1836"
    },
  })
  console.log('delete image ===>', data)
  return data

}

