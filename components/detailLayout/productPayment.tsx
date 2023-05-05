import { ArrowStore, DiscountSign } from "../../public/assets";
import { useRouter } from "next/router";
const ProductPayment = () => {
  const router = useRouter();
  return (
    <div className="fixed bottom-0 md:relative lg:relative bg-white/30 backdrop-blur-md border border-gray-300 lg:w-96 lg:flex-col h-fit rounded-xl md:flex w-full md:my-4 lg:my-0">
      <div className="w-full h-6 md:h-fit md:border-none lg:border-b-4 p-2">
        <div className="border w-full h-12 md:h-fit rounded-xl flex items-center justify-between p-2 gap-x-2">
          <DiscountSign />
          <div className="flex flex-col">
            <p className="text-sm font-bold">You have discount ticket</p>
            <p className="hidden md:block">
              Better you add the discount ticket here dude
            </p>
          </div>
          <div className="border border-green-500 p-1 rounded-full flex items-center justify-center">
            <ArrowStore />
          </div>
        </div>
      </div>
      <div className="w-full h-fit hidden md:block lg md:border-none lg:border-b-4 p-2">
        <div className="border w-full h-32 rounded-xl flex items-center justify-between p-2 gap-x-2">
          <div className="flex flex-col w-full">
            <p className="text-sm font-bold">Grand Total</p>
            <p>Pay those all with the correct amount</p>
            <p className="flex justify-end py-2 text-base font-bold">$ 0</p>
          </div>
        </div>
      </div>
      <div className="w-full h-fit">
        <div className="w-full lg:h-fit h-28 rounded-xl flex items-center justify-between">
          <div className="flex flex-col w-full p-2 justify-between">
            <p className="text-md font-semibold py-2 hidden md:block">
              Yo dude checkout now or what!
            </p>
            <button
              onClick={() => router.push("/")}
              className="flex text-base font-bold bg-green-500 text-white h-full px-4 py-2 rounded-xl flex-row items-center justify-between w-full"
            >
              <p>Checkout</p>
              <p className="text-base font-bold">$ 0</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPayment;
