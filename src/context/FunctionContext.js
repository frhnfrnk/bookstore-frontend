import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FunctionContext = createContext();

export const FunctionProvider = (props) => {
  const [bookList, setBookList] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState([]);
  const [keyword, setKeyword] = useState([]);
  const [publisher, setPublisher] = useState([]);
  const [author, setAuthor] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [store, setStore] = useState([]);
  const [staff, setStaff] = useState([]);
  const [addressCust, setAddressCust] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState([]);
  const [history, setHistory] = useState([]);
  const [language, setLanguage] = useState([]);

  const fetchBookDetail = async (id) => {
    try {
      let res = await axios.get(`/api/book/${id}`);
      let result = res.data;
      setModal([...result]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    toast.info("Fetching data...", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });

    try {
      setLoading(true);
      let resBook = await axios.get("/api/book");
      let resultBook = resBook.data;
      setLoading(false);
      setBookList([...resultBook]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCart = async () => {
    toast.info("Fetching data...", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    let staff = localStorage.getItem("staff_id");
    try {
      let res = await axios.get(`/api/cart`, {
        data: {
          staff_id: staff,
        },
      });
      let result = res.data;
      setCart([...result]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSearch = async () => {
    toast.info("Fetching data...", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    if (search == "") {
      fetchData();
    } else {
      try {
        setLoading(true);

        console.log(search);
        let res = await axios.get(`/api/book/search/${search}`);
        let result = res.data;
        setLoading(false);

        setBookList([...result]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const fetchPublisher = async () => {
    toast.info("Fetching data...", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    try {
      setLoading(true);

      let res = await axios.get(`/api/book/publisher`);
      let result = res.data;
      setLoading(false);

      setPublisher([...result]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategory = async () => {
    toast.info("Fetching data...", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    try {
      let res = await axios.get(`/api/book/category`);
      let result = res.data;
      setCategory([...result]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAuthor = async () => {
    toast.info("Fetching data...", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    try {
      let res = await axios.get(`/api/book/author`);
      let result = res.data;
      setAuthor([...result]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCustomer = async () => {
    toast.info("Fetching data...", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    try {
      let res = await axios.get(`/api/customer`);
      let result = res.data;
      setCustomer([...result]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchStore = async () => {
    toast.info("Fetching data...", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    try {
      let res = await axios.get(`/api/store/`);
      let result = res.data;
      setStore([...result]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchStaff = async () => {
    toast.info("Fetching data...", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    try {
      let res = await axios.get(`/api/staff`);
      let result = res.data;
      setStaff([...result]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAddress = async () => {
    toast.info("Fetching data...", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    try {
      let res = await axios.get(`/api/address`);
      let result = res.data;
      setAddressCust([...result]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    const val = document.querySelector("#input").value;
    await setSearch(val);
    fetchSearch();
  };

  const fetchHistory = async () => {
    toast.info("Fetching data...", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    try {
      let res = await axios.get(`/api/order/history`);
      let result = res.data;
      setHistory([...result]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLanguage = async () => {
    toast.info("Fetching data...", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    try {
      let res = await axios.get(`/api/book/language`);
      let result = res.data;
      setLanguage([...result]);
    } catch (error) {
      console.log(error);
    }
  };

  let functions = {
    fetchData,
    handleSumbit,
    fetchCart,
    fetchSearch,
    fetchPublisher,
    fetchCategory,
    fetchAuthor,
    fetchCustomer,
    fetchStore,
    fetchStaff,
    fetchAddress,
    fetchHistory,
    fetchLanguage,
  };

  return (
    <FunctionContext.Provider
      value={{
        bookList,
        setBookList,
        author,
        setAuthor,
        input,
        setInput,
        cart,
        setCart,
        category,
        setCategory,
        keyword,
        setKeyword,
        fetchStatus,
        setFetchStatus,
        publisher,
        setPublisher,
        search,
        setSearch,
        customer,
        setCustomer,
        store,
        setStore,
        staff,
        setStaff,
        addressCust,
        setAddressCust,
        history,
        setHistory,
        language,
        setLanguage,
        functions,
      }}
    >
      {props.children}
    </FunctionContext.Provider>
  );
};
