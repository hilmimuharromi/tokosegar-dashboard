import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Header = (props: any) => {
  const router = useRouter();
  const { pathname } = router;
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(pathname.slice(1));
  }, [pathname]);
  return (
    <div className="w:full top-0 h-16">
      <h2>Page : {title}</h2>
    </div>
  );
};

export default Header;
