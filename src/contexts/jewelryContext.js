import React, { useReducer } from "react";
import axios from "axios";

import { CASE_GET_ONE_JEWERLY, CASE_GET_JEWERLY } from "../helpers/cases";
import { JEWERLY_API } from "../helpers/consts";

export const jewelryContext = React.createContext();

const INIT_STATE = {
  jewerly: [],
  oneJewerly: null,
  productsTotalCount: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_JEWERLY:
      return { ...state, 
        jewerly: action.payload.data,
        productsTotalCount: action.payload.headers["x-total-count"], 
    };
    case CASE_GET_ONE_JEWERLY:
      return { ...state, oneJewerly: action.payload.data };
    default:
      return state;
  }
};

const JewelryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createJewelry (newJewelry){
    await axios.post(JEWERLY_API, newJewelry)
    getJewerly()
  }

  async function getJewerly() {
    let result = await axios.get(`JEWERLY_API${window.location.search}`);
    dispatch({
      type: CASE_GET_JEWERLY,
      payload: result,
    });
  }

  async function getOneJewely(id) {
    let result = await axios.get(`${JEWERLY_API}/${id}`);
    dispatch({
      type: CASE_GET_ONE_JEWERLY,
      payload: result,
    });
  }

  async function deleteJewerly (id){
      await axios.delete(`${JEWERLY_API}/${id}`)
      getJewerly()
  }

  async function updateJewerly (id, editedJewerly){
      await axios.patch(`${JEWERLY_API}/${id}`, editedJewerly)
      getJewerly()
  }

  return (
    <jewelryContext.Provider
      value={{
        jewerly: state.jewerly,
        oneJewerly: state.oneJewerly,
        productsTotalCount: state.productsTotalCount,
        getJewerly,
        getOneJewely,
        deleteJewerly,
        updateJewerly,
        createJewelry,
      }}
    >
      {children}
    </jewelryContext.Provider>
  );
};
export default JewelryContextProvider;
