import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { FunctionContext } from "../context/FunctionContext";

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
        <div className="header">
          <h1>Cart</h1>
          <div></div>
        </div>
        {cart ? (
          <ul className="map">
            {cart.map((val, index) => {
              return (
                <li className="card" key={index}>
                  <div className="img">
                    <img src={val.img} />
                  </div>
                  <div className="text">
                    <div className="title">
                      <h2>{val.title}</h2>
                    </div>
                    <div className="text2">
                      <p>{val.price}$</p>
                    </div>
                    <div className="amount">
                      <h3>Jumlah</h3>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div>Loading.....</div>
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
