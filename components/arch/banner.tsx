import Image from "next/image";
import Samsung from "../../public/samsung.webp";
import Govo from "../../public/tokped.png";
const Banner = () => {
  return (
    <div className="hidden md:grid grid-cols-2 md:grid-rows-2 md:grid-cols-1 grid-flow-row md:grid-flow-col gap-4 w-full md:w-64 lg:w-2/4 px-4 md:px-0">
      <div className="bg-white border border-gray-300 shadow rounded-xl w-full h-24 overflow-hidden">
        <Image src={Samsung} alt="Samsung" className="h-full" loading="lazy" />
      </div>
      <div className="bg-white border border-gray-300 shadow rounded-xl w-full h-24">
        <div className="bg-violet-500 border border-gray-300 shadow rounded-xl w-full h-24 overflow-hidden">
          <Image
            src={Govo}
            alt="nutela"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
