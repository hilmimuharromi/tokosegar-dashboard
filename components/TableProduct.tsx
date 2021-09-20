import Table from "./Table";
import Image from "next/image";
const TableProduct = ({ data }: any) => {
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
  return <Table data={data} headers={headers} />;
};

export default TableProduct;
