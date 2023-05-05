import { useContext, useEffect, useMemo, useRef, useState } from "react";
import Layout from "../components/layout";
import Screen from "../components/arch/screen";
import ProductCardWrap from "../components/arch/productCardWrap";

import ProductCardTitle from "../components/arch/productCardTitle";
import ProductGalery from "../components/detailLayout/productGalery";
import ProductDescription from "../components/detailLayout/productDescription";
import ProductOrder from "../components/detailLayout/productOrder";
import ProductSave from "../components/detailLayout/productSave";
import ProductStore from "../components/detailLayout/productStore";
import { GlobalContext } from "../lib/Context";
import { useRouter } from "next/router";
const Detail = () => {
  const [shoes, setShoes] = useState<any>([]);
  const router = useRouter();
  const { id } = useMemo(() => router.query, [router.query]);
  const { state } = useContext(GlobalContext);

  const refer = useRef<any>();

  const scrollToBottom = () => {
    refer.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const getDetail = async () => {
    const getter = await fetch(`/api/search?id=${id}`);
    const data = await getter.json();

    return setShoes(data);
  };

  useEffect(() => {
    getDetail();
    scrollToBottom();
  }, [router.query]);

  return (
    <div className="flex flex-col justify-center pb-24 md:py-24" ref={refer}>
      <Screen>
        <div className="md:max-w-2xl lg:max-w-7xl w-full h-fit flex flex-col md:flex-col lg:flex-row items-stretch grow flex-shrink-0">
          <ProductGalery image={shoes?.data?.image} galery={[""]} />
          <div className="flex flex-col justify-between w-full p-2 md:py-2 md:px-0 lg:px-4 gap-y-2">
            <ProductDescription
              description={shoes?.data?.description}
              name={shoes?.data?.name}
            />
            <ProductStore />
          </div>

          <ProductOrder
            price={shoes?.data?.price}
            product={shoes?.data}
            color={shoes?.data?.colors}
            size={shoes?.data?.sizes}
          />
        </div>
      </Screen>
      <Screen>
        <div className="md:max-w-2xl lg:max-w-7xl w-full h-fit flex flex-col items-stretch grow flex-shrink-0 gap-4">
          <ProductCardTitle title="Lainnya Di Toko Ini" />
          <ProductCardWrap data={state?.product} />
        </div>
      </Screen>
    </div>
  );
};

Detail.layout = Layout;
export default Detail;
