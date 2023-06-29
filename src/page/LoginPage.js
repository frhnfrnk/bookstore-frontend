import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StoreContext } from "../context/StoreContext";
import { Helmet } from "react-helmet";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const { store, fetchStore, storeId, setStoreId } = useContext(StoreContext);

  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let store_id = localStorage.getItem("store_name");

  useEffect(() => {
    let store_id = localStorage.getItem("store_id");
    if (store_id) {
      setStoreId(store_id);
    } else {
      redirect("/");
    }
  }, []);

  const handleLogin = async () => {
    const account = {
      username: username,
      password: password,
    };
    try {
      let res = await axios.post(`/api/staff/login/`, account);
      let result = res.data;
      if (result.tokens.access) {
        localStorage.setItem("access_token", result.tokens.access);
        localStorage.setItem("refresh_token", result.tokens.refresh);
        localStorage.setItem("staff_id", result.staff_id);
        localStorage.setItem("is_manager", result.isManager);
        window.location.href = "/home";
      }
    } catch (error) {
      console.log(error);
      toast.error("Gunakan HNS Bookstore jika gagal", {
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
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <div className="bg-gray-50 flex flex-col w-full max-w-full h-screen flex justify-center items-center px-3 mx-auto  md:flex-0 shrink-0">
        <div className="relative bg-white shadow-soft-xl rounded-2xl relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
          <div className="p-10 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
            <h4 className="relative z-10 font-bold text-transparent bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 bg-clip-text">
              {`Welcome to ${store_id}`}
            </h4>
            <p className="mb-0">Enter your username and password to sign in</p>
          </div>
          <div className="flex-auto p-6">
            <form role="form">
              <label className="mb-2 ml-1 font-bold text-xs text-slate-700">
                Username
              </label>
              <div className="mb-4">
                <input
                  type="text"
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                  placeholder="Username"
                  aria-label="Email"
                  aria-describedby="email-addon"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <label className="mb-2 ml-1 font-bold text-xs text-slate-700">
                Password
              </label>
              <div className="mb-4">
                <input
                  type="password"
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="password-addon"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="text-center">
                <button
                  type="button"
                  className="w-full leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-2 text-center align-middle font-bold uppercase text-white transition-all"
                  onClick={handleLogin}
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <div className="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
            <p className="mx-auto mb-6 leading-normal text-sm">
              Don't have an account?
              <Link
                to="/signup"
                className="relative z-10 font-semibold text-transparent bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 bg-clip-text"
              >
                Sign up
              </Link>
            </p>
          </div>
          <div className="flex justify-center text-slate-500/30">
            <p className="mx-auto mb-6 leading-normal text-sm">
              username, password : admin, admin
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
