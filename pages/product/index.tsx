import type { NextPage } from "next";
import { TableProduct } from "../../components";
import { GetServerSideProps } from "next";
import { AppProps } from "next/app";
import { useGetProducts } from "../../lib/utils/useRequest";
import {mutate} from 'swr'
interface dataProps {
  data: {
    id: string;
    name: string;
    desciption: string;
  }[];
}
const ProductPage = () => {
  
  return (
    <div>
      <TableProduct />
    </div>
  );
};

export default ProductPage;

