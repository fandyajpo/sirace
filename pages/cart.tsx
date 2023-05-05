import Layout from "../components/layout";
import Screen from "../components/arch/screen";
import ProductPayment from "../components/detailLayout/productPayment";
import ProductInCart from "../components/detailLayout/productInCart";
const Cart = () => {
  return (
    <div className="flex flex-col justify-center py-16 pb-44 md:py-24 h-auto">
      <Screen>
        <div className="md:max-w-2xl lg:max-w-7xl w-full h-fit flex flex-col md:flex-col-reverse lg:flex-row items-stretch grow flex-shrink-0 gap-x-4">
          <ProductInCart />
          <ProductPayment />
        </div>
      </Screen>
    </div>
  );
};

Cart.layout = Layout;
export default Cart;
