import axios from "axios";
import React, { createContext, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = (props) => {
  const [store, setStore] = useState([]);
  const [storeId, setStoreId] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchStore = async () => {
    try {
      let res = await axios.get(`/api/store/`);
      let result = res.data;
      setStore([...result]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StoreContext.Provider
      value={{
        storeId,
        setStoreId,
        store,
        setStore,
        loading,
        setLoading,
        fetchStore,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
