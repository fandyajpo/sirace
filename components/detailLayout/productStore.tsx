import { memo } from "react";
import Image from "next/image";
import NextJS from "../../public/next.svg";
import { ArrowStore } from "../../public/assets";
const ProductStore = memo(() => {
  return (
    <div className="w-full h-24 bg-white rounded-xl border border-gray-300 flex items-center p-4 justify-between">
      <div className="flex items-center gap-x-4">
        <Image
          src={NextJS}
          alt="VERCEL"
          className="w-16 h-16 border rounded-full p-2"
        />
        <div>
          <p className="text-base font-bold">Next Store</p>
          <div className="flex items-center gap-x-2">
            <div className="bg-green-500 w-3 h-3 rounded-full" />
            <p className="text-xs">Online</p>
          </div>
        </div>
      </div>
      <button
        className="active:scale-90 duration-300"
        onClick={() => alert("dont disturb, we are busy right now")}
      >
        <ArrowStore />
      </button>
    </div>
  );
});

ProductStore.displayName = "ProductStore";
export default ProductStore;
