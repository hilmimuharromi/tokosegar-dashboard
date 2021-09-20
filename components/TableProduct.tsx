import Table from "./Table";
import Image from "next/image";
import { IconSearch, IconClear } from "../assets/icon";
import { useState, useEffect } from "react";
const TableProduct = ({ data }: any) => {
  const [searchInput, setSearchInput] = useState("");
  const [dataTable, setDataTable] = useState(data);

  useEffect(() => {
    const filterData = () => {
      const newData = data.filter((item: any) => {
        let name: string = item.name.toLowerCase();
        if (name.includes(searchInput.toLowerCase())) {
          return item;
        }
      });
      setDataTable(newData);
    };
    if (searchInput) {
      filterData();
    } else {
      setDataTable(data);
    }
  }, [searchInput]);

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
      <div className="flex w:full mb-5">
        <div className="flex py-2.5 px-2.5  rounded shadow bg-white">
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
      </div>
      <Table data={dataTable} headers={headers} />
    </>
  );
};

export default TableProduct;
