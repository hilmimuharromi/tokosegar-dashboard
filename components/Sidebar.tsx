import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/image/logo.png";
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
      return <IconHome fill={activeMenu === item.url ? "white" : "#23AB96"} />;
    } else if (item.icon === "cube") {
      return <IconCube fill={activeMenu === item.url ? "white" : "#23AB96"} />;
    } else if (item.icon === "collection") {
      return (
        <IconCollection fill={activeMenu === item.url ? "white" : "#23AB96"} />
      );
    } else if (item.icon === "switchH") {
      return (
        <IconSwitchH fill={activeMenu === item.url ? "white" : "#23AB96"} />
      );
    }
  };

  useEffect(() => {
    const { pathname } = router;
    setActiveMenu(pathname);
  }, [router]);

  return (
    <aside className="text-black-100 w-64 space-y-6 py-7 px-2transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out bg-white-500">
      <div className="flex justify-center items-center  py-2.5 px-2.5 ">
        <Image src={Logo} alt="Toko Segar Logo" />
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
      <div className="place-self-end py-2 px-2 bg-deepCarmine rounded-lg">
        Logout
      </div>
    </aside>
  );
};

export default Sidebar;
