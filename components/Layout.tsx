import { ReactNode, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
