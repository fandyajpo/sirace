import { useContext } from "react";
import { GlobalContext } from "../lib/Context";
const Structure = () => {
  const { state } = useContext(GlobalContext);

  return <pre>{JSON.stringify(state.cart, null, 2)}</pre>;
};

export default Structure;
