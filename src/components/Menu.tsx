"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <Image
        src="/menu.png"
        alt="Menu"
        height={28}
        width={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      ></Image>
      {open && (
        <div className="absolute text-white bg-black left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-8 tracking-wide text-xl z-10">
          <Link href="/">Homepage</Link>
          <Link href="/">shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">Contact us</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
