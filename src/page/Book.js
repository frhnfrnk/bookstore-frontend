import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FunctionContext } from "../context/FunctionContext";
import { Helmet } from "react-helmet";
import axios from "axios";
import { faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Store() {
  const { bookList, setBookList, functions, cart } =
    useContext(FunctionContext);
  const { fetchData, fetchStore } = functions;

  const [titleProduct, setTitleProduct] = useState("");
  const [descProduct, setDescProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [categoryProduct, setCategoryProduct] = useState("");
  const [stockProduct, setStockProduct] = useState("");
  const [conditionProduct, setConditionProduct] = useState("");
  const [publicationYearProduct, setPublicationYearProduct] = useState("");
  const [numPage, setNumPage] = useState("");
  const [idProduct, setIdProduct] = useState("");
  const [isbn, setIsbn] = useState("");
  const [wishlistStatus, setWishlistStatus] = useState(false);
  const [bookId, setBookId] = useState("");
  const [publisherName, setPublisherName] = useState("");
  const [languageName, setLanguageName] = useState("");

  const [status, setStatus] = useState(false);
  const [bookShow, setBookShow] = useState([]);
  const [isBook, setIsBook] = useState(false);

  useEffect(() => {
    if (!status && bookList.length === 0) {
      fetchData();
      setStatus(true);
    }
  }, [status]);

  useEffect(() => {
    if ((bookList.length = 0)) {
      setStatus(false);
    }
  }, [bookList]);

  async function createClickHandler(index) {
    const popOut = document.getElementsByClassName("popOutContainer").item(0);
    popOut.classList.add("popOutActive");

    let res = await axios.get(`/api/book/${index}`);
    let result = res.data;
    console.log(result);
    setBookShow([result]);
    setIsBook(true);
  }

  function closePopOut() {
    const popOut = document.getElementsByClassName("popOutContainer").item(0);
    popOut.classList.remove("popOutActive");
    setIsBook(false);
  }

  // return async () => {

  //   let res = await axios.get(`/api/book/${index}`);
  //   let result = res.data;
  //   console.log(result);
  //   setBookShow([result]);
  //   setIsBook(true);
  // };

  const handleUpdate = async (id) => {
    let imageProduct = bookShow[0].image;

    const data = {
      title: titleProduct,
      description: descProduct,
      publication_year: publicationYearProduct,
      num_page: numPage,
      price: priceProduct,
      condition_value: conditionProduct,
      image: imageProduct,
      publisher: publisherName,
      language: languageName,
      isbn13: isbn,
    };

    let res = await axios.put(`/api/book/${id}/`, data);
    toast.success("Book updated successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    fetchData();
  };

  const handleDelete = async (id) => {
    let res = await axios.delete(`/api/book/${id}/`);
    toast.success("Book deleted successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    fetchData();
  };

  return (
    <Container>
      <div>
        <Helmet>
          <title>Booklist</title>
        </Helmet>
        <ToastContainer />
        <div className="header">
          <h1 className="text-slate-700 text-3xl font-sans my-3">Book List</h1>
          <div></div>
        </div>
        {bookList ? (
          <div className="relative flex flex-col w-full min-w-0 mb-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="p-0 overflow-x-auto">
              <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-700">
                <thead className="align-bottom">
                  <tr>
                    <th className="px-6 py-3 pl-2 w-[50px] font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Title
                    </th>
                    <th className="px-6 py-3 pl-2 w-[50px] font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      ISBN
                    </th>
                    <th className="px-6 py-3 pl-2 w-[50px] font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Author
                    </th>
                    <th className="px-6 py-3 pl-2 w-[50px] font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Publisher
                    </th>
                    <th className="px-6 py-3 pl-2 w-[50px] font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Year
                    </th>
                    <th className="px-6 py-3 pl-2 w-[50px] font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Price
                    </th>
                    <th className="px-6 py-3 pl-2 w-[50px] font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Category
                    </th>
                    <th className="px-6 py-3 pl-2 w-[50px] font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Stock Store Yogya
                    </th>
                    <th className="px-6 py-3 pl-2 w-[50px] font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Stock Store Jakarta
                    </th>
                    <th className="px-6 py-3 pl-2 w-[50px] font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Action
                    </th>
                  </tr>
                </thead>
                {bookList.map((val, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td className="p-2  w-[50px]align-middle bg-transparent border-b whitespace-nowrap shadow-transparent text-xs">
                          <p className="mb-0 leading-tight">{val.title}</p>
                        </td>
                        <td className="p-2  w-[50px] align-middle bg-transparent border-b whitespace-nowrap shadow-transparent text-xs">
                          <p className="mb-0 leading-tight">{val.isbn13}</p>
                        </td>
                        <td className="p-2 w-[50px] align-middle bg-transparent border-b whitespace-nowrap shadow-transparent text-xs">
                          <p className="mb-0 leading-tight">{val.authors[0]}</p>
                        </td>
                        <td className="p-2 w-[50px] align-middle bg-transparent border-b whitespace-nowrap shadow-transparent text-xs">
                          <p className="mb-0 leading-tight">{val.publisher}</p>
                        </td>
                        <td className="p-2 w-[50px] align-middle bg-transparent border-b whitespace-nowrap shadow-transparent text-xs">
                          <p className="mb-0 leading-tight">
                            {val.publication_year}
                          </p>
                        </td>

                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent text-xs">
                          <p className="mb-0 leading-tight">{val.price}</p>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent text-xs">
                          <p className="mb-0 leading-tight">
                            {val.categories[0]}
                          </p>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent text-xs">
                          <p className="mb-0 leading-tight">
                            {val.stock_store1}
                          </p>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent text-xs">
                          <p className="mb-0 leading-tight">
                            {val.stock_store2}
                          </p>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent text-xs">
                          <button
                            type="button"
                            class="inline-block px-3 py-2 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs"
                            onClick={() => {
                              createClickHandler(val.book_id);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            class="inline-block px-3 py-2 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs"
                            onClick={() => {
                              handleDelete(val.book_id);
                            }}
                          >
                            Delete
                          </button>
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

        <div className="popOutContainer">
          {isBook ? (
            <div className="popOut">
              <div class="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                <div class="pt-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                  <h5>Edit Book</h5>
                </div>
                <div class="flex-auto p-6">
                  <form role="form text-left">
                    <div class="mb-4 flex flex-row justify-between gap-3">
                      <input
                        type="text"
                        id="title"
                        class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Title"
                        aria-label="Name"
                        aria-describedby="email-addon"
                        defaultValue={bookShow[0].title}
                        onChange={(e) => setTitleProduct(e.target.value)}
                      />
                      <div class="flex flex-row justify-between gap-2">
                        <input
                          type="text"
                          id="language"
                          class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                          placeholder="Language"
                          aria-label="Language"
                          aria-describedby="email-addon"
                          defaultValue={bookShow[0].language}
                          onChange={(e) => setLanguageName(e.target.value)}
                        />
                        <input
                          type="text"
                          id="publisher"
                          class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                          placeholder="Publisher"
                          aria-label="Publisher"
                          aria-describedby="email-addon"
                          defaultValue={bookShow[0].publisher}
                          onChange={(e) => setPublisherName(e.target.value)}
                        />
                        <input
                          type="text"
                          id="price"
                          class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                          placeholder="Price"
                          aria-label="Publisher"
                          aria-describedby="email-addon"
                          defaultValue={bookShow[0].price}
                          onChange={(e) => setPriceProduct(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="mb-4">
                      <input
                        type="textarea"
                        id="description"
                        class="focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                        placeholder="Description"
                        aria-label="Description"
                        aria-describedby="email-addon"
                        defaultValue={bookShow[0].description}
                        onChange={(e) => setDescProduct(e.target.value)}
                      />
                    </div>
                    <div class="mb-4 flex flex-row justify-between gap-3">
                      <input
                        type="text"
                        id="isbn"
                        class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="ISBN"
                        aria-label="Name"
                        aria-describedby="email-addon"
                        defaultValue={bookShow[0].isbn13}
                        onChange={(e) => setIsbn(e.target.value)}
                      />
                      <div class="flex flex-row justify-between gap-2">
                        <input
                          type="text"
                          id="numpages"
                          class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                          placeholder="Num Page"
                          aria-label="Language"
                          aria-describedby="email-addon"
                          defaultValue={bookShow[0].num_pages}
                          onChange={(e) => setNumPage(e.target.value)}
                        />
                        <input
                          type="text"
                          id="condition"
                          class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                          placeholder="Condition Value"
                          aria-label="Publisher"
                          aria-describedby="email-addon"
                          defaultValue={bookShow[0].condition_value}
                          onChange={(e) => setConditionProduct(e.target.value)}
                        />
                        <input
                          type="text"
                          id="publication_year"
                          class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                          placeholder="Year"
                          aria-label="Publisher"
                          aria-describedby="email-addon"
                          defaultValue={bookShow[0].publication_year}
                          onChange={(e) =>
                            setPublicationYearProduct(e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div class="text-center">
                      <button
                        type="button"
                        class="inline-block w-full px-6 py-3 mt-6 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
                        onClick={() => {
                          handleUpdate(bookShow[0].book_id);
                          closePopOut();
                        }}
                      >
                        Edit
                      </button>
                    </div>
                    <div class="text-center">
                      <button
                        type="button"
                        class="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-purple-700 to-pink-700 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
                        onClick={() => {
                          closePopOut();
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
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
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  font-family: "Inter", sans-serif;

  .popOut {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 70vh;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    transition: all 5s ease-in-out;
  }

  .popOut .popOutLeft {
    width: 50%;
    height: 100%;
    background-color: #252936;
    border-radius: 20px 0 0 20px;
  }

  .popOut .popOutLeft img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 20px 0 0 20px;
  }

  .popOut .popOutRight {
    width: 50%;
    height: 100%;
    background-color: #252936;
    padding: 0 0 0 20px;
    color: #feffff;
    border-radius: 0 20px 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .popOut .popOutRight .close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    font-size: 1.5rem;
    text-align: center;
  }

  .popOut .popOutRight .close:hover {
    color: #252936;
  }

  .popOut .popOutRight .close svg {
    width: 80%;
    height: 80%;
    cursor: pointer;
    color: #feffff;
  }
  .popOut .popOutRight .close button {
    width: 100%;
    height: 100%;
    border: none;
    background-color: #ff7551;
    border-radius: 50%;
  }

  .popOutRight h1 {
    font-size: 1.5rem;
    color: #252936;
    padding: 0;
  }

  .popOutContainer {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    display: none;
    opacity: 0;
  }

  .popOutActive {
    display: block !important;
    opacity: 1 !important;
    transition: opacity 500ms;
  }

  .detailProduct {
    width: 90%;
    height: 60%;
  }

  .rateStock {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .rateStock div {
    padding: 10px;
    width: auto;
    height: 50px;
    border: 1px solid #ff7551;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ff7551;
  }

  .rateStock span {
    padding: 1px;
    background-color: #ff7551;
    border-radius: 5px;
    margin: 5px 0;
  }

  .rateStock div p {
    margin: 0;
    text-align: center;
  }

  .rateStock div p:nth-child(2) {
    margin-top: 10px;
  }
  .rateStock div p svg {
    color: yellow;
  }
  .btnCTA {
    background-color: #252936;
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 10%;
    padding: 1px 0;
    margin: 0 auto;
  }

  .category p {
    text-transform: capitalize;
  }
  .price {
    font-size: 1.5rem;
    font-weight: 600;
    background-color: #ff7551;
    float: right;
    padding: 5px;
    border-radius: 5px;
  }
  .price h3 {
    margin: 0;
    text-align: right;
    color: #feffff;
  }

  .btnCTA .btnShow {
    width: 80%;
    font-size: 1rem;
    background-color: #32a7e2;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 7px;
    margin-right: 10px;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #252936;
    }

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .btnCTA .btnShow svg {
    margin-right: 5px;
  }

  .btnCTA .btnAddToWish {
    width: 20%;
    font-size: 1rem;
    background-color: #ff7551;
    border: none;
    border-radius: 7px;
    color: white;
    transition: all 0.2s ease-in-out;
  }

  .btnCTA .btnAddToWish:hover {
    color: #252936;
  }
  .hover {
    border-color: #32a7e2 !important;
    transform: scale(1.1);
  }
`;
