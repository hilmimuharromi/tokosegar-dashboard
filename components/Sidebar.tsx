import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/image/logo.png";
import { useRouter } from "next/router";
import trigger, { mutate} from "swr";
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
      return <IconHome fill={handleActive(item) ? "#fff" : "#23AB96"} />;
    } else if (item.icon === "cube") {
      return <IconCube fill={handleActive(item) ? "white" : "#23AB96"} />;
    } else if (item.icon === "collection") {
      return <IconCollection fill={handleActive(item) ? "white" : "#23AB96"} />;
    } else if (item.icon === "switchH") {
      return <IconSwitchH fill={handleActive(item) ? "white" : "#23AB96"} />;
    }
  };

  useEffect(() => {
    const { pathname } = router;
    console.log(router);
    console.log(pathname.split("/"));
    setActiveMenu(pathname);
  }, [router]);

  const handleActive = (item: any) => {
    if (activeMenu !== "/" && item.url === "/") return false;
    else return activeMenu.includes(item.url.toLowerCase());
  };

  const logout = () => {
    localStorage.removeItem('user')
    mutate("user", null);
    router.push(`/login`);
  }

  return (
    <div className="text-black-100 min-h-screen w-64 space-y-6 py-7 px-2 flex flex-col transform -translate-x-full md:translate-x-0 transition duration-200 ease-in-out">
      <div className="flex justify-center items-center  py-2.5 px-2.5 ">
        <Image src={Logo} alt="Toko Segar Logo" />
      </div>

      {menuItems.map((item) => (
        <Link key={item.title} href={item.url} passHref>
          <div
            className={`flex items-center py-2.5 px-4 rounded-lg transition duration-200 hover:bg-white  hover:shadow cursor-pointer ${
              handleActive(item) && "shadow bg-white"
            }`}
          >
            <div
              className={`py-2 px-2 mr-2 rounded ${
                handleActive(item) ? 'bg-primary' : 'bg-white'
              }`}
            >
              {iconHandler(item)}
            </div>
            {item.title}
          </div>
        </Link>
      ))}
      <div onClick={logout} className="items:end py-2 px-4 bg-deepCarmine rounded-lg shadow cursor-pointer hover:translate-y-1">
        Logout
      </div>
    </div>
  );
};

export default Sidebar;
