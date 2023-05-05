import { Dispatch, useReducer } from "react";
import { createContext } from "react";
import { ChildrenInterface } from "../types/Children";
import { State } from "../types/Context";

const INITIAL_STATE: State = {
  product: [],
  totalProduct: 0,
  cart: [],
  totalCart: 0,
  grandTotal: 0,
  searchHistory: [],
  wishlist: [],
  login: false,
};

export type Action =
  | { type: "SET_PRODUCT"; payload: State }
  | { type: "SET_CART"; payload: State }
  | { type: "SET_HISTORY"; payload: State }
  | { type: "SET_WISHLIST"; payload: State }
  | { type: "ISLOGIN"; payload: State };

export type GlobalContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const Reducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case "SET_PRODUCT":
      return {
        ...state,
        product: payload.product,
      };

    case "SET_HISTORY":
      return {
        ...state,
        searchHistory: payload.searchHistory,
      };
    case "SET_WISHLIST":
      return {
        ...state,
        wishlist: payload.wishlist,
      };
    case "SET_CART":
      return {
        ...state,
        cart: payload.cart,
      };
    case "ISLOGIN":
      return {
        ...state,
        login: true,
      };
    // const itemId = state.cart.findIndex(
    //   //@ts-ignored
    //   (item: any) => item.id === payload.id
    // );
    // if (itemId >= 0) {
    //   return {
    //     ...state,
    //     //@ts-ignored
    //     cart: (payload.cart[itemId].quantity += 1),
    //   };
    // } else {
    //   //@ts-ignored
    //   const tempProduct = { ...payload.cart, quantity: 1 };
    //   return {
    //     ...state,
    //     //@ts-ignored
    //     cart: [tempProduct],
    //   };
    // }

    default:
      throw new Error("Type is not defined");
  }
};

export const TodoProvider = ({ children }: ChildrenInterface) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
