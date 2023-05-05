import Link from "next/link";
import ProductImage from "./image";
import { useCallback, useContext, useMemo } from "react";
import { Wishlist, NotWishlist } from "../../public/assets";
import { GlobalContext } from "../../lib/Context";
import { motion } from "framer-motion";
import Image from "next/image";
interface Props {
  product: any;
}
// aas
const ProductCard = (props: Props) => {
  const { product } = useMemo(() => props, [props]);

  const { state, dispatch } = useContext(GlobalContext);
  const { wishlist } = useMemo(() => state, [state.wishlist]);

  const storeWishlish = useCallback(
    (a: any) => () => {
      const concating = wishlist.concat(a);
      dispatch({
        type: "SET_WISHLIST",
        //@ts-ignored
        payload: {
          wishlist: concating,
        },
      });
    },
    [wishlist]
  );

  const itemChecker = useCallback(
    (a: any) => {
      //@ts-ignored
      return wishlist.find((item) => item?.id === a);
    },
    [wishlist]
  );

  const remove = useCallback(
    (a: any) => () => {
      //@ts-ignored
      const filteredArray = wishlist.filter((item) => item.id !== a);

      dispatch({
        type: "SET_WISHLIST",
        //@ts-ignored
        payload: {
          wishlist: filteredArray,
        },
      });
    },
    [wishlist]
  );

  return (
    <motion.div className="border p-2 rounded-xl border-gray-300 md:hover:scale-95 active:scale-95 duration-200  z-10 bg-white w-36 md:w-44 h-64 md:h-72 relative  flex-none">
      <Link
        href={{
          pathname: "/detail",
          query: {
            id: product?.id,
          },
        }}
        className="buttonEffect group  rounded-xl overflow-hidden   group-hover:border-black"
      >
        <ProductImage image={product?.image} />
        {/* <motion.div layoutId={product?.id}>
          <Image
            src={product?.image}
            width={500}
            height={500}
            className="h-96 w-full md:w-96  md:rounded-md shadow-sm"
            alt={"product"}
          />
        </motion.div> */}

        <div className="p-2">
          <p>{product?.name}</p>
          <p className="text-md font-bold">$ {product?.price}</p>
        </div>
      </Link>
      {itemChecker(product?.id) ? (
        <button
          onClick={remove(product.id)}
          className="absolute right-2 bottom-2"
        >
          <Wishlist />
        </button>
      ) : (
        <button
          onClick={storeWishlish(product)}
          className="absolute right-2 bottom-2"
        >
          <NotWishlist />
        </button>
      )}
    </motion.div>
  );
};

export default ProductCard;
