import { memo, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
interface Props {
  image: string;
  galery: string[];
}

const ProductGalery = memo((props: Props) => {
  const { galery, image } = useMemo(() => props, [props]);

  return (
    <div className="w-5/7 flex flex-col gap-y-2">
      <Image
        src={image}
        width={500}
        height={500}
        className="h-96 w-full md:w-96  md:rounded-md shadow-sm"
        alt={"product"}
      />
      <div className="grid md:flex grid-rows-1 grid-cols-4 gap-2 w-full p-2 md:p-0">
        <div className="bg-gray-200 w-full h-20 md:w-20 rounded-md active:scale-90 duration-200"></div>
        <div className="bg-gray-200 w-full h-20 md:w-20 rounded-md active:scale-90 duration-200"></div>
        <div className="bg-gray-200 w-full h-20 md:w-20 rounded-md active:scale-90 duration-200"></div>
        <div className="bg-gray-200 w-full h-20 md:w-20 rounded-md active:scale-90 duration-200"></div>
      </div>
    </div>
  );
});

ProductGalery.displayName = "ProductGalery";
export default ProductGalery;
