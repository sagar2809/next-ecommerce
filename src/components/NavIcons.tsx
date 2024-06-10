"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModel from "./CartModel";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();

  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };
  return (
    <div className=" flex items-center gap-4 xl:gap-6 px-6 relative">
      <Image
        className="cursor-pointer"
        src="/profile.png"
        alt="profile"
        width={22}
        height={22}
        onClick={handleProfile}
      ></Image>
      {isProfileOpen && (
        <div className="absolute p-4 left-0 top-8 rounded-md text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        className="cursor-pointer"
        src="/notification.png"
        alt="profile"
        width={22}
        height={22}
      ></Image>
      <div className="relative cursor-pointer">
        <Image
          src="/cart.png"
          alt="profile"
          width={22}
          height={22}
          onClick={() => setIsCartOpen((prev) => !prev)}
        ></Image>
        <div className="absolute h-6 w-6 -top-4 -right-4 bg-cart rounded-full text-sm text-white flex items-center justify-center">
          23
        </div>
      </div>
      {isCartOpen && <CartModel></CartModel>}
    </div>
  );
};

export default NavIcons;
