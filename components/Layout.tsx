import { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import useSWR from 'swr'
import storage from '../lib/utils/storage'
import checkLogin from '../lib/utils/checkLogin'
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const { data: currentUser } = useSWR("user", storage);
  const isLoggedIn = checkLogin(currentUser);
  let user:any = ''

  const { pathname } = router;

  if(typeof window !== "undefined") {
    user = localStorage.getItem('user')
  }





  useEffect(() => {
    if(!user && pathname !== '/login' && pathname !== 'register') {
      router.push('/login')
    }
    
  }, [user])

  if(!user) {
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
        {JSON.stringify(isLoggedIn)}

        {children}
      </div>
    </div>
  );
};

export default Layout;
