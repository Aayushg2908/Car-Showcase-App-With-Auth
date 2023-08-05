"use client";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { CustomButton } from "@components";
import toast, {Toaster} from "react-hot-toast";

function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [logOut, setLogOut] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      setLogOut(true);
    } else {
      setLogOut(false);
    }
  }, [pathname]);

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <header className="w-full  absolute z-10">
      <Toaster/>
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        {logOut && (
          <CustomButton
            title="Logout"
            btnType="button"
            handleClick={logout}
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          />
        )}
      </nav>
    </header>
  );
}
export default NavBar;
