import { useCallback, useState, useContext, useMemo } from "react";
import { GlobalContext } from "../../lib/Context";
import { Transition } from "@headlessui/react";
import { X } from "../../public/assets";

import { useRouter } from "next/router";
import { Wishlist, NotWishlist } from "../../public/assets";
import Image from "next/image";
const ProductTab = () => {
  const router = useRouter();
  console.log(router.query.id);
  const [itemSelection, setItemSelection] = useState(false);

  const getItemSelect = useCallback(() => {
    setItemSelection((b) => !b);
  }, [itemSelection]);

  const { state, dispatch } = useContext(GlobalContext);
  const { wishlist, cart } = useMemo(() => state, [state.wishlist, state.cart]);

  const filterData = useMemo(
    () => state.product.filter((d: any) => d.id === router.query.id),
    [router.query.id]
  );

  return (
    <div className="lg:hidden">
      <div
        className={`flex bg-white backdrop-blur-md shadow-md fixed bottom-0 ${
          itemSelection ? "z-20" : "z-10"
        }  justify-center w-full items-center h-fit md:block lg:hidden border-t rounded-t-xl`}
      >
        <div className="flex justify-center items-center w-full">
          <div className="md:max-w-2xl lg:max-w-7xl h-16 w-full flex items-center justify-between shadow-sm gap-x-2 p-2">
            <button
              className="buttonEffect active:scale-90 duration-300 bg-white border border-green-500 w-full h-12 rounded-xl font-bold text-green-500"
              onClick={() => alert("Maaf Transaksi belum tersedia")}
            >
              Beli Langsung
            </button>
            <button
              //   onClick={addToCard(filterData)}
              className="buttonEffect active:scale-90 duration-300  bg-green-500 font-bold text-white w-full h-12 rounded-xl"
            >
              + Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTab;
