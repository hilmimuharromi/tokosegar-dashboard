import type { NextPage } from "next";
import { TableProduct } from "../components";
import { GetServerSideProps } from "next";
import { AppProps } from "next/app";

interface dataProps {
  data: {
    id: string;
    name: string;
    desciption: string;
  }[];
}
const ProductPage = ({ data }: dataProps) => {
  return (
    <div>
      <h2>Product Page</h2>
      <TableProduct data={data} />
    </div>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("http://localhost:5000/product");
  const { data } = await res.json();

  console.log(data, "get data product");

  return {
    props: {
      data: [...data, ...data, ...data],
    },
  };
};
