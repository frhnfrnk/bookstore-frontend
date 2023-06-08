import React, { useContext, useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { Helmet } from "react-helmet";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddBook() {
  const { store, fetchStore, storeId, setStoreId, loading, setLoading } =
    useContext(StoreContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [language, setLanguage] = useState("");
  const [isbn, setIsbn] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [condition_value, setCondition_value] = useState("");
  const [num_pages, setNum_pages] = useState("");
  const [publication_year, setPublication_year] = useState("");

  const [isAlert, setIsAlert] = useState(false);

  useEffect(() => {
    let store_id = localStorage.getItem("store_id");
    if (store_id) {
      setStoreId(store_id);
    } else {
      redirect("/");
    }
  }, []);

  let store_id = localStorage.getItem("store_id") || "";

  const handleAddBook = async () => {
    let data = {
      title: title,
      description: description,
      publication_year: publication_year,
      num_pages: num_pages,
      price: price,
      isbn13: isbn,
      language: language,
      publisher: publisher,
      language: language,
      author: author,
      category: category,
      condition_value: condition_value,
      image: image,
    };

    try {
      let res = await axios.post(`api/book/`, data);
      let resData = res.data;
      if (resData.book_id) {
        toast.success("Book added successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        });
        setAuthor("");
        setCategory("");
        setDescription("");
        setImage("");
        setIsbn("");
        setLanguage("");
        setNum_pages("");
        setPrice("");
        setPublisher("");
        setTitle("");
        setCondition_value("");
        setPublication_year("");
      }
    } catch (err) {
      toast.error("Failed", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>Booklist</title>
      </Helmet>
      <div className="header">
        <h1 className="text-slate-700 text-3xl font-sans my-3">Book List</h1>
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
              onChange={(e) => setTitle(e.target.value)}
            />
            <div class="flex flex-row justify-between gap-2">
              <input
                type="text"
                id="language"
                class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                placeholder="Language ID"
                aria-label="Language"
                aria-describedby="email-addon"
                onChange={(e) => setLanguage(e.target.value)}
              />
              <input
                type="text"
                id="publisher"
                class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                placeholder="Publisher"
                aria-label="Publisher"
                aria-describedby="email-addon"
                onChange={(e) => setPublisher(e.target.value)}
              />
              <input
                type="text"
                id="price"
                class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                placeholder="Price"
                aria-label="Publisher"
                aria-describedby="email-addon"
                onChange={(e) => setPrice(e.target.value)}
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
              onChange={(e) => setDescription(e.target.value)}
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
                onChange={(e) => setNum_pages(e.target.value)}
              />
              <input
                type="text"
                id="condition"
                class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                placeholder="Condition Value"
                aria-label="Publisher"
                aria-describedby="email-addon"
                onChange={(e) => setCondition_value(e.target.value)}
              />
              <input
                type="text"
                id="publication_year"
                class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                placeholder="Year"
                aria-label="Publisher ID"
                aria-describedby="email-addon"
                onChange={(e) => setPublication_year(e.target.value)}
              />
            </div>
          </div>
          <div class="mb-4">
            <input
              type="text"
              id="description"
              class="focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
              placeholder="Author"
              aria-label="author"
              aria-describedby="email-addon"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div class="mb-4">
            <input
              type="text"
              id="description"
              class="focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
              placeholder="Image URL"
              aria-label="author"
              aria-describedby="email-addon"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div class="text-center">
            <button
              type="button"
              class="inline-block w-full px-6 py-3 mt-6 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
              onClick={() => {
                handleAddBook();
              }}
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
