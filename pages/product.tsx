import type { NextPage } from "next";
import { TableProduct, ModalProduct } from "../components";
import { GetServerSideProps } from "next";
import { AppProps } from "next/app";
import { useGetProducts } from "../lib/utils/useRequest";
import useSWR, {mutate,} from 'swr'
import {useState} from 'react'
import storage from '../lib/utils/storage'
interface dataProps {
  data: {
    id: string;
    name: string;
    desciption: string;
  }[];
}
const ProductPage = () => {
    const [visibleModal, setVisibleModal] = useState(false)
const { data: currentUser } = useSWR("user", storage);
  
  return (
    <div>
        <ModalProduct visible={visibleModal} setVisible={setVisibleModal} user={currentUser}/>
      <TableProduct setVisible={setVisibleModal} user={currentUser}/>
      {JSON.stringify(currentUser)}
    </div>
  );
};

export default ProductPage;

