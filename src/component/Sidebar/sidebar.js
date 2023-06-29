import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonSwitch from "../Button/btnSwitch";
import { SwitchThemeContext } from "../../context/SwitchTheme";
import { MenuStaffItems } from "./menuStaffItem";
import { MenuManagerItems } from "./menuManagerItem";

export default function Sidebar() {
  const { theme } = useContext(SwitchThemeContext);

  const activePage = window.location.href;

  const navBar = document.getElementsByClassName("menu_bar");

  setTimeout(function () {
    for (var i = 0; i < navBar.length; i++) {
      const navLinks = document.getElementsByClassName("menu_link").item(i);
      if (navLinks.href === activePage) {
        navLinks.classList.add("active");
      }
      navLinks.addEventListener("click", () => {
        for (var i = 0; i < navBar.length; i++) {
          const navLinks = document.getElementsByClassName("menu_link").item(i);
          navLinks.classList.remove("active");
        }
        navLinks.classList.add("active");
      });
    }
  }, 200);

  const storeName = localStorage.getItem("store_name");

  return (
    <Container>
      <div className={theme}>
        <div className={`sidebar ${theme}`}>
          <div className="logo">
            <Link to="/">
              <h1 className={`${theme}  text-slate-700 text-3xl`}>
                {storeName}
              </h1>
            </Link>
          </div>
          <div className="menu">
            <p className={`${theme}`}>Menu</p>
            <ul>
              {MenuStaffItems.map((item, index) => {
                return (
                  <li key={index} className="menu_bar">
                    <Link className="menu_link" to={item.url}>
                      <FontAwesomeIcon icon={item.icon} />
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="menu">
            <p className={`${theme}`}>Manager Only</p>
            <ul>
              {MenuManagerItems.map((item, index) => {
                return (
                  <li key={index} className="menu_bar hover:text-pink-700">
                    <Link className="menu_link" to={item.url}>
                      <FontAwesomeIcon icon={item.icon} />
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            type="button"
            className="w-1/2 mx-auto my-5 inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs"
            onClick={() => {
              localStorage.removeItem("staff_id");
              localStorage.removeItem("refresh_token");
              localStorage.removeItem("store_name");
              localStorage.removeItem("access_token");
              localStorage.removeItem("is_manager");
              localStorage.removeItem("store_id");
              window.location.href = "/";
            }}
          >
            Logout
          </button>
          <div className="btnSwitch">
            <ButtonSwitch />
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  padding: 20px 20px;
  display: flex;
  height: 100vh;
  font-family: "Inter", sans-serif;

  .sidebar {
    overflow-y: scroll;
    padding: 0 0 1vh 0;
  }

  .sidebar.light {
    display: flex;
    flex-direction: column;
    width: 100%;

    display: flex;
    width: 35vh;
    background-color: #ffffff;
    -webkit-box-shadow: 1px 0px 17px -1px rgba(214, 199, 214, 1);
    -moz-box-shadow: 1px 0px 17px -1px rgba(214, 199, 214, 1);
    box-shadow: 1px 0px 17px -1px rgba(214, 199, 214, 1);
    -webkit-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;
    transition: background-color 500ms linear;
    height: 95vh;

    color: black;

    border-radius: 20px;
  }

  .sidebar.dark {
    display: flex;
    flex-direction: column;
    width: 100%;

    display: flex;
    width: 35vh;
    background-color: #1f1d2b;
    -webkit-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;
    transition: background-color 500ms linear;
    height: 95vh;

    color: black;

    border-radius: 20px;
  }

  .logo {
    height: 10%;
    padding: 20px 0px 10px 0;
    text-align: center;

    a {
      text-decoration: none;
      font-size: 0.8rem;

      .light {
        color: #344767;
      }

      .dark {
        color: #ffffff;
      }
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    padding: 1vh 0 0 1vw;

    .light {
      margin-bottom: -10px;
      font-weight: bold;
      color: #344767;
      padding: 0 0 0 5px;
      margin-bottom: 10px;
    }

    .dark {
      margin-bottom: -10px;
      font-weight: bold;
      color: #67748e;
      padding: 0 0 0 5 px;
    }

    ul {
      padding: 0;
    }

    .menu_bar {
      list-style: none;
      .menu_link {
        padding: 10px 0 10px 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        text-decoration: none;
        color: #344767;
        font-weight: 500;
        transition: 0.1s ease;

        &:hover {
          font-weight: 700;

          svg {
            background-color: #7928ca;
            color: #fff;
          }
        }
      }

      svg {
        padding: 8px;
        width: 15px;
        height: 15px;
        margin-right: 10px;
        background-color: #344767;
        border-radius: 10px;
        border: 1px solid transparent;
        color: #808191;
      }
    }
  }

  .active {
    color: #831843 !important;
    font-weight: 700 !important;

    svg {
      background-color: #be185d !important;
      color: #fff !important;
    }
  }

  .btnSwitch {
    margin-top: auto;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
