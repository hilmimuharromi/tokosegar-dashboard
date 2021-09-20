import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  IconCube,
  IconHome,
  IconCollection,
  IconSwitchH,
} from "../assets/icon";
const Sidebar = () => {
  const router = useRouter();
  const menuItems = [
    {
      title: "Dashboard",
      url: "/",
      icon: "home",
    },
    {
      title: "Product",
      url: "/product",
      icon: "cube",
    },
    {
      title: "Category",
      url: "/category",
      icon: "collection",
    },
    {
      title: "Transaction",
      url: "/transaction",
      icon: "switchH",
    },
  ];
  const [activeMenu, setActiveMenu] = useState("");
  const iconHandler = (item: any) => {
    if (item.icon === "home") {
      return <IconHome fill={activeMenu === item.url ? "white" : "#4FD1C5"} />;
    } else if (item.icon === "cube") {
      return <IconCube fill={activeMenu === item.url ? "white" : "#4FD1C5"} />;
    } else if (item.icon === "collection") {
      return (
        <IconCollection fill={activeMenu === item.url ? "white" : "#4FD1C5"} />
      );
    } else if (item.icon === "switchH") {
      return (
        <IconSwitchH fill={activeMenu === item.url ? "white" : "#4FD1C5"} />
      );
    }
  };

  useEffect(() => {
    const { pathname } = router;
    // const urlName = pathname.slice(1);
    // console.log(urlName, pathname);
    setActiveMenu(pathname);
  }, [router]);
  return (
    <div className="sidebar text-black-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out bg-green-200">
      <div className="flex justify-center items-center bg-primary h-10 rounded-lg shadow">
        <h2>Toko Segar</h2>
      </div>

      {menuItems.map((item) => (
        <Link key={item.title} href={item.url} passHref>
          <div
            className={`flex items-center py-2.5 px-4 rounded-lg transition duration-200 hover:bg-white  hover:shadow cursor-pointer ${
              activeMenu === item.url && "shadow bg-white"
            }`}
          >
            <div
              className={`bg-white py-2 px-2 mr-2 rounded ${
                activeMenu === item.url && "bg-primary"
              }`}
            >
              {iconHandler(item)}
            </div>
            {item.title}
          </div>
        </Link>
      ))}
      <div className="place-self-end bg-red-200">Logout</div>
    </div>
  );
};

export default Sidebar;
