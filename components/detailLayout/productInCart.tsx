import { useContext, useMemo, useCallback } from "react";
import { GlobalContext } from "../../lib/Context";
import Image from "next/image";
import Link from "next/link";
const ProductInCart = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const { cart } = useMemo(() => state, [state.cart]);

  const RemoveRecent = useCallback(
    (a: any) => () => {
      const filteredArray = cart.filter((item: any) => item.id !== a);

      dispatch({
        type: "SET_CART",
        //@ts-ignored
        payload: {
          cart: filteredArray,
        },
      });
    },
    [cart]
  );

  return (
    <div className="flex flex-col gap-y-2 w-full max-h-max p-2 md:p-0">
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            className="w-8 h-8 rounded-xl active:scale-50 outline-none checked:ring-0 text-green-500 duration-500 accent-transparent"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
          <p className="text-gray-500">Pilih Semua Item</p>
        </div>
      </div>
      <div className="w-full h-1 bg-gray-300" />

      {cart?.length > 0 ? (
        cart.map((a: any, i) => {
          return (
            <div key={i} className="flex flex-col gap-y-4 h-full">
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  className="w-8 h-8 rounded-xl active:scale-50 outline-none checked:ring-0 text-green-500 duration-500 accent-transparent"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <p className="font-bold text-base">Next Store</p>
              </div>

              <div className="flex flex-col md:flex-row gap-4 border p-2 rounded-xl hover:bg-gray-100 duration-500">
                <Image
                  alt={a.name}
                  src={a.image}
                  width={200}
                  height={200}
                  className="border rounded-xl w-52 flex-none h-52 bg-gray-100 border-t py-2"
                />
                <div className="flex flex-col justify-between">
                  <div className="w-full">
                    <p className="text-base font-bold">{a.name}</p>
                    <p className="text-xs font-light">{a.description}</p>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-base font-bold">$ {a.price}</p>
                    <button
                      onClick={RemoveRecent(a.id)}
                      className="text-red-500 hover:bg-red-500 hover:text-white hover:p-2 rounded-xl duration-300"
                    >
                      Remove from cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="max-h-max h-full flex flex-col items-center justify-center pt-24">
          <p className="md:text-3xl font-bold">You dont have any order item</p>
          <Link
            href={"/"}
            className="buttonEffect bg-blue-500/20 text-blue-500 px-4 py-1 rounded-full font-bold"
          >
            Lets take a look
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductInCart;
