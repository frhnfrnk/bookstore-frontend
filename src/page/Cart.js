import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { FunctionContext } from "../context/FunctionContext";
import { Helmet } from "react-helmet";

export default function Cart() {
  const {
    shop,
    setShop,
    functions,
    fetchStatus,
    setFetchStatus,
    search,
    cart,
    setCart,
  } = useContext(FunctionContext);
  const { fetchData, fetchCart } = functions;

  useEffect(() => {
    if (fetchStatus) {
      fetchCart();
      setFetchStatus(false);
    }
  }, [fetchData, fetchStatus, setFetchStatus]);

  return (
    <Container>
      <div>
        <Helmet>
          <title>Cart</title>
        </Helmet>
        <div className="header">
          <h1 className="text-slate-700 text-3xl font-sans my-3">Cart</h1>
          <div></div>
        </div>
        {cart ? (
          <div className="relative flex flex-col w-full min-w-0 mb-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="p-0 overflow-x-auto">
              <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-700">
                <thead className="align-bottom">
                  <tr>
                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      ID
                    </th>
                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Book Id
                    </th>
                  </tr>
                </thead>
                {cart.map((val, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <div className="flex px-2 py-1">{val.cart_id}</div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <p className="mb-0 leading-tight">{val.book_id}</p>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        ) : (
          <div>Tidak ada language</div>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  font-family: "Inter", sans-serif;

  .header {
    text-align: center;

    div {
      height: 2px;
      background: white;
    }
    h1 {
      color: #ffffff;
    }
  }

  .map {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 0;
    list-style: none;
  }

  .card {
    margin: 10px;
    width: 100%;
    height: 100px;
    border: 3px solid #252936;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    .img {
      width: 30%;
      height: 100%;
      display: flex;
      justify-content: center;
    }
    img {
      width: 30%;
      border-radius: 5px 5px 0 0;
    }

    .text {
      color: #feffff;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: #252936;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
      padding: 0 10px;

      .title {
        font-size: 10px;
        display: block;
        float: left;
        margin: 0;
        width: 40%;
        text-align: left;
      }

      .amount {
        width: 40%;
      }

      .text2 {
        display: flex;
        flex-direction: row;
        font-size: 0.75rem;
        justify-content: space-around;
        width: 20%;

        p {
          display: inline-block;
        }
      }
    }
  }
`;
