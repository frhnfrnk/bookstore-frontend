import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { StoreContext } from "../context/StoreContext";
import Loading from "../component/Loading/loading";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const { store, fetchStore, storeId, setStoreId } = useContext(StoreContext);

  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!status && store.length === 0) {
      fetchStore();
      setStatus(true);
    }
  }, [status]);

  useEffect(() => {
    if ((store.length = 0)) {
      setStatus(false);
    }
  }, [store]);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      window.location.href = "/home";
    }
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center antialiased font-normal text-start text-base leading-default text-slate-500 bg-gray-50">
      <h1 className="font-semibold text-5xl hover:bg-blue">HNS Store</h1>
      <div className="relative flex flex-col w-2/4 h-1/4 p-5 border-0 border-solid bg-white bg-clip-border shadow-soft-xl rounded-2xl">
        <h3 className="text-center font-bold">Pilih Store</h3>
        {store ? (
          store.map((val, index) => {
            return (
              <Link key={index} to="/login">
                <button
                  className="inline-block w-full px-6 py-3 mb-1 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
                  type="button"
                  onClick={() => {
                    setStoreId(val.store_id);
                    localStorage.setItem("store_id", val.store_id);
                    localStorage.setItem("store_name", val.store_name);
                  }}
                >
                  {val.store_name}
                </button>
              </Link>
            );
          })
        ) : (
          <div>Loading . . .</div>
        )}
        {loading ? <h4>Loading . . .</h4> : null}
      </div>
    </div>
  );
}
