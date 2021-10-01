import { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();

  const { pathname } = router;

  if(pathname === '/login') {
    return(
      <div className="flex">
          {children}
      </div>

    )
  }



  return (
    <div className="flex flex-no-wrap">
      <div className="w-64 absolute sm:relative md:h-full md:flex flex-col justify-between hidden">
        <Sidebar />
      </div>
      <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
        <Header />

        {children}
      </div>
    </div>
  );
};

export default Layout;
