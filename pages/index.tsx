import Layout from "../components/layout";
import Screen from "../components/arch/screen";
import ProductCardWrap from "../components/arch/productCardWrap";
import EmblaCarousel from "../components/arch/carousel";
import Banner from "../components/arch/banner";
import Category from "../components/arch/category";
import ProductCardTitle from "../components/arch/productCardTitle";

import { useEffect, useContext, useMemo } from "react";
import { GlobalContext } from "../lib/Context";
import { useRouter } from "next/router";
import Login from "../components/layout/login";
export default function Home() {
  const router = useRouter();
  const { state, dispatch } = useContext(GlobalContext);
  const { login } = useMemo(() => state, [state.login]);

  const men = useMemo(
    () => state?.product.filter((d: any) => d?.category === "men"),
    [state.product]
  );
  const basket = useMemo(
    () => state?.product.filter((d: any) => d?.category === "basket"),
    [state.product]
  );
  const run = useMemo(
    () => state?.product.filter((d: any) => d?.category === "run"),
    [state.product]
  );

  if (!login) return <Login />;

  return (
    <div className="flex flex-col justify-center pb-24 pt-14 md:py-24">
      <Screen>
        <div className="md:max-w-2xl lg:max-w-7xl w-full h-52 flex flex-col md:flex-row grow flex-shrink-0 gap-4">
          <Banner />
          <EmblaCarousel />
        </div>
      </Screen>
      <Screen>
        <div className="md:max-w-2xl lg:max-w-7xl w-full h-fit flex flex-col items-stretch grow flex-shrink-0 gap-4">
          <ProductCardTitle title="For You" />
          <Category />
        </div>
      </Screen>
      <Screen>
        <div className="md:max-w-2xl lg:max-w-7xl w-full h-fit flex flex-col items-stretch grow flex-shrink-0 gap-4">
          <ProductCardTitle title="All Type of Shoes We Have" />
          <ProductCardWrap data={state.product} />
        </div>
      </Screen>
      <Screen>
        <div className="md:max-w-2xl lg:max-w-7xl w-full h-fit flex flex-col items-stretch grow flex-shrink-0 gap-4">
          <ProductCardTitle title="Run Master" />
          <ProductCardWrap data={run} />
        </div>
      </Screen>
      <Screen>
        <div className="md:max-w-2xl lg:max-w-7xl w-full h-fit flex flex-col items-stretch grow flex-shrink-0 gap-4">
          <ProductCardTitle title="Men Shoes" />
          <ProductCardWrap data={men} />
        </div>
      </Screen>

      <Screen>
        <div className="md:max-w-2xl lg:max-w-7xl w-full h-fit flex flex-col items-stretch grow flex-shrink-0 gap-4">
          <ProductCardTitle title="Basket Boiler" />
          <ProductCardWrap data={basket} />
        </div>
      </Screen>
    </div>
  );
}

Home.layout = Layout;
