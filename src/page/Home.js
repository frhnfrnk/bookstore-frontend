import React, { Suspense, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { FunctionContext } from "../context/FunctionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { SwitchThemeContext } from "../context/SwitchTheme";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

export default function Home() {
  const { bookList, functions, fetchStatus, setFetchStatus } =
    useContext(FunctionContext);
  const { fetchData } = functions;

  const [isBook, setIsBook] = useState(false);

  const [bookShow, setBookShow] = useState([]);

  const { theme, setTheme } = useContext(SwitchThemeContext);

  useEffect(() => {
    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchData, fetchStatus, setFetchStatus]);

  const cardCollection = document.getElementsByClassName("card"); // Mengambil objek HTML Collection
  const cardArray = Array.from(cardCollection);
  setTimeout(() => {
    for (let i = 0; i < cardArray.length; i++) {
      const cardEach = cardArray[i];
      cardEach.addEventListener("mouseover", () => {
        cardEach.classList.add("hover");
      });
      cardEach.addEventListener("mouseleave", () => {
        cardEach.classList.remove("hover");
      });
    }
  }, 100);

  const addCart = async (id) => {
    const cart = {
      book_id: id,
      staff_id: localStorage.getItem("staff_id"),
    };
    try {
      await axios.post("api/cart/add/", cart).then((res) => {
        console.log(res);
        toast.success("Added to cart", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  function closePopOut() {
    const popOut = document.getElementsByClassName("popOutContainer").item(0);
    popOut.classList.remove("popOutActive");
    setIsBook(false);
  }

  return (
    <div>
      <Helmet>
        <title>Home - Book</title>
      </Helmet>
      <ToastContainer />
      <div className="text-center">
        <h1 className=" text-3xl font-sans my-3">Book</h1>
      </div>
      {bookList ? (
        <div className="grid grid-cols-4 gap-5">
          {bookList.map((val, index) => {
            return (
              <div class="w-full m-[10px] mx-auto h-[60vh]">
                <div class="relative mb-5 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border h-[100%] pb-5 px-2">
                  <div class="relative h-[60%] w-full py-2 rounded-2xl">
                    <img
                      src={val.image}
                      alt="img-blur-shadow"
                      class="rounded-2xl object-cover w-full h-full"
                    />
                  </div>
                  <div class="h-[40%] flex-auto px-1 pt-6">
                    <p class="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">
                      {val.authors[0]}
                    </p>
                    <div>
                      <h5 className="truncate">{val.title}</h5>
                    </div>
                    <p class="mb-6 leading-normal text-sm">{val.price}</p>
                    <div class="flex items-center justify-center px-2">
                      <button
                        type="button"
                        class="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-gradient-to-tl hover:from-purple-700 hover:to-pink-500 hover:text-white hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500 hover:"
                        onClick={() => addCart(val.book_id)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Loading.....</div>
      )}

      {/* <div className="popOutContainer">
        {isBook ? (
          <div className="popOut">
            <div className="popOutLeft">
              <img src={bookShow[0].image} />
            </div>
            <div className="popOutRight">
              <div className="close" onClick={closePopOut}>
                <button>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <div className="detailProduct">
                <h2>{bookShow[0].title}</h2>
                <p>{`ISBN : ${bookShow[0].isbn}`}</p>
                <p>{bookShow[0].desc}</p>
                <div className="desc">
                  <p>{`Tahun : ${bookShow[0].publication_year}`}</p>
                  <p>{`Halaman : ${bookShow[0].num_pages}`}</p>
                  <p>{`Kondisi : ${bookShow[0].condition_value}`}</p>
                  <p>{`Harga : ${bookShow[0].price}`}</p>
                  <p>{`Penerbit : ${bookShow[0].publisher.publisher_name}`}</p>
                  <p>{`Bahasa : ${bookShow[0].language.language_name}`}</p>
                </div>

                <div className="category">
                  <p>Category : {categoryProduct}</p>
                </div>
                <div className="btnCTA">
                  <button className="btnShow">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <p>Add to Cart</p>
                  </button>
                  <button className="btnAddToWish">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="popOutLoading">
            <div className="popOutLoadingInner"> Loading ...</div>
            <div className="close" onClick={closePopOut}>
              <button>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
}
