import { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex">
      <div className="h-screen top-0 sticky p-2">
        <Sidebar />
      </div>
      <div className="flex-grow p-4">
        <Header />

        {children}
      </div>
    </div>
  );
};

export default Layout;
