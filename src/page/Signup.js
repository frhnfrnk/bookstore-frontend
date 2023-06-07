import React, { useContext, useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

export default function SignupPage() {
  const { store, fetchStore, storeId, setStoreId, loading, setLoading } =
    useContext(StoreContext);

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isManager, setIsManager] = useState(false);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");

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

  const handleSignUp = async (e) => {
    e.preventDefault();
    const addressObj = {
      address: address,
      city: city,
      postal_code: postal,
      phone: "-",
    };
    let manager;
    if (isManager === "1") {
      manager = true;
    } else {
      manager = false;
    }

    const staff = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      username: username,
      password: password,
      is_manager: manager,
      address: addressObj,
      store_id: store_id,
    };

    try {
      let res = await axios.post(`/api/staff/signup/`, staff);
      let result = res.data;
      if (result.tokens.access) {
        localStorage.setItem("access_token", result.tokens.access);
        localStorage.setItem("refresh_token", result.tokens.refresh);
        localStorage.setItem("staff_id", result.staff_id);
        localStorage.setItem("is_manager", result.is_manager);
        window.location.href = "/home";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class="container m-0 p-0">
        <div class="h-screen w-screen flex flex-wrap justify-center items-center bg-gray-50">
          <div class="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
            <div class="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="pt-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                <h5>Register</h5>
              </div>
              <div class="flex-auto p-6">
                <form role="form text-left">
                  <div class="mb-4 flex flex-row justify-between gap-3">
                    <input
                      type="text"
                      class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                      placeholder="First Name"
                      aria-label="Name"
                      aria-describedby="email-addon"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                      type="text"
                      class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                      placeholder="Last Name"
                      aria-label="Name"
                      aria-describedby="email-addon"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      type="email"
                      class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="addon-addon"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="mb-4 flex flex-row justify-between gap-3">
                    <input
                      type="text"
                      class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                      placeholder="Username"
                      aria-label="username"
                      aria-describedby="addon-addon"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                      type="password"
                      class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="password-addon"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div class="block min-h-6 pl-7 mb-4">
                    <label>
                      <input
                        id="checkbox-1"
                        class="w-5 h-5 ease-soft text-base -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                        type="checkbox"
                        name="checkbox-1"
                        value="1"
                        onClick={(e) => setIsManager(e.target.value)}
                      />
                      <label
                        for="checkbox-1"
                        class="cursor-pointer select-none font-bold text-slate-700 text-sm"
                      >
                        Manager
                      </label>
                    </label>
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                      placeholder="Address"
                      aria-label="Address"
                      aria-describedby="email-addon"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div class="mb-4 flex flex-row justify-between gap-3">
                    <input
                      type="text"
                      class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                      placeholder="City"
                      aria-label="City"
                      aria-describedby="addon-addon"
                      onChange={(e) => setCity(e.target.value)}
                    />
                    <input
                      type="text"
                      class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                      placeholder="Postal Code"
                      aria-label="PostalCode"
                      aria-describedby="email-addon"
                      onChange={(e) => setPostal(e.target.value)}
                    />
                  </div>
                  <div class="min-h-6 pl-6.92 mb-0.5 block">
                    <input
                      id="checkbox-2"
                      class="w-5 h-5 ease-soft text-base -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                      type="checkbox"
                    />
                    <label
                      class="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-slate-700"
                      for="terms"
                    >
                      {" "}
                      I agree the{" "}
                      <a href="javascript:;" class="font-bold text-slate-700">
                        Terms and Conditions
                      </a>{" "}
                    </label>
                  </div>
                  <div class="text-center">
                    <button
                      type="button"
                      class="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
                      onClick={handleSignUp}
                    >
                      Sign up
                    </button>
                  </div>
                  <p class="mt-4 mb-0 leading-normal text-sm">
                    Already have an account?{" "}
                    <a
                      href="../pages/sign-in.html"
                      class="font-bold text-slate-700"
                    >
                      Sign in
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
