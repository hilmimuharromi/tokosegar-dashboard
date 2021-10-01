import Table from "./Table";
import Image from "next/image";
import Link from "next/link";
import { IconSearch, IconClear, IconPlus } from "../assets/icon";
import { useState, useEffect } from "react";
import Pagination from './Pagination'
import {useGetProducts} from '../lib/utils/useRequest'

const TableProduct = () => {
  const [searchInput, setSearchInput] = useState("");
  const [dataTable, setDataTable] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalData, setTotalData] = useState(0)
  const [limit, setLimit] = useState(5)
  
  const { products, error } = useGetProducts(`/product?limit=${limit}&page=${currentPage}&search=${searchInput}`);
 


  useEffect(() => {
    console.log('====>',currentPage)

    if(products) {

      setDataTable(products.data.rows)
      setTotalData(products.data.count)
      
    }

   
 
  }, [products])




 


  // useEffect(() => {
  //   const filterData = () => {
  //     const newData = dataTable.filter((item: any) => {
  //       let name: string = item.name.toLowerCase();
  //       if (name.includes(searchInput.toLowerCase())) {
  //         return item;
  //       }
  //     });
  //     setDataTable(newData);
  //   };
  //   if (searchInput) {
  //     filterData();
  //   } else {
  //     let sortData = dataTable.sort((a: any, b: any) => {
  //       let fa = a.name.toLowerCase(),
  //         fb = b.name.toLowerCase();

  //       if (fa < fb) {
  //         return -1;
  //       }
  //       if (fa > fb) {
  //         return 1;
  //       }
  //       return 0;
  //     });
  //     setDataTable(sortData);
  //   }
  // }, [searchInput, dataTable]);

  if (error) {
    return <h2>error ....</h2>;
  };

  // if(!products) {
  //   return(<p>Loading.....</p>)
  // }

 


  const headers = [
    {
      title: "Nama",
      key: "name",
      render: (item: any) => (
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 rounded-lg border shadow">
            <Image
              className="rounded-lg"
              src={item.image_url}
              alt={item.name}
              layout="responsive"
              width="100"
              height="100"
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{item.name}</div>
            <div className="text-sm text-gray-500">{item.Category.name}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Deskripsi",
      key: "description",
    },
    {
      title: "Stok",
      key: "stock",
    },
    {
      title: "Harga",
      key: "price",
    },
    {
      title: "Diskon %",
      key: "discount",
    },
    {
      title: "",
      key: "",
      render: (item: any) => (
        <button
          onClick={() => console.log(item)}
          className="bg-primary rounded p-1 w-100"
        >
          Edit
        </button>
      ),
    },
  ];
  return (
    <>
      <div className="flex w:full mb-5 px-5 justify-between">
        <div className="flex py-2.5 px-2.5  rounded shadow bg-white ">
          <IconSearch fill={"#23AB96"} />
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Cari Produk ...."
            className="focus:outline-none focus:border-none mx-4"
          />
          {searchInput && (
            <div className="cursor-pointer" onClick={() => setSearchInput("")}>
              <IconClear className="w-10 h-10" fill={"#23AB96"} />
            </div>
          )}
        </div>
        <div>
          <Link href={"/product/new"} passHref>
            <button className="flex items-center py-2.5 px-2.5  rounded shadow bg-white text-primary">
              <IconPlus fill={"#23AB96"}  />
              <p className="ml-3">
              Produk
              </p>
            </button>
          </Link>
        </div>
      </div>

      <Table data={dataTable} headers={headers} />
      <Pagination  
      totalData={totalData}
      limit={limit}
      setLimit={setLimit}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage} />
    </>
  );
};

export default TableProduct;
