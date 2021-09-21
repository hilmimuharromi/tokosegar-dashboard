import type { NextPage } from "next";
import { TableProduct } from "../../components";
import { GetServerSideProps } from "next";
import { AppProps } from "next/app";
import { useGetProducts } from "../../utils/useRequest";

interface dataProps {
  data: {
    id: string;
    name: string;
    desciption: string;
  }[];
}
const ProductPage = ({ data }: dataProps) => {
  const { products, error } = useGetProducts("/product");
  if (error || !products) {
    return <h2>error ....</h2>;
  }
  console.log("products", products);
  console.log("error", error);
  return (
    <div>
      <TableProduct data={products.data} />
    </div>
  );
};

export default ProductPage;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch("http://localhost:5000/product");
//   const { data, error } = await res.json();

//   console.log(error, "get data product");

//   return {
//     props: {
//       data: [...data, ...data, ...data],
//     },
//   };
// };
