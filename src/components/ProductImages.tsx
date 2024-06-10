"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/4202924/pexels-photo-4202924.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/4465121/pexels-photo-4465121.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/3817498/pexels-photo-3817498.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/7235677/pexels-photo-7235677.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
export default function ProductImages() {
  const [index, setIndex] = useState(1);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt="Product-1"
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        ></Image>
      </div>
      <div className="flex justify-between gap-4 mt-8 cursor-pointer">
        {images.map((item, i) => (
          <>
            <div
              className="w-1/4 h-32 relative gap-4 mt-8"
              key={item.id}
              onClick={() => setIndex(i)}
            >
              <Image
                src={item.url}
                alt=""
                sizes="30vw"
                fill
                className="object-cover rounded-md"
              ></Image>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
