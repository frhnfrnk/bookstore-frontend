import {
  faCartShopping,
  faHeart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { React, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FunctionContext } from "../../context/FunctionContext";

export default function Modal(props) {
  const [titleProduct, setTitleProduct] = useState("");
  const [descProduct, setDescProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [imageProduct, setImageProduct] = useState("");
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

  const { modal, functions, loading } = useContext(FunctionContext);
  const { fetchData, fetchBookDetail } = functions;

  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (!status && modal.length === 0) {
      fetchBookDetail();
      console.log(modal);

      setStatus(true);
    }
  }, [status]);

  useEffect(() => {
    if ((modal.length = 0)) {
      setStatus(false);
    }
  }, [modal]);

  function closePopOut() {
    const popOut = document.getElementsByClassName("popOutContainer").item(0);
    popOut.classList.remove("popOutActive");
    setBookId("");
  }

  return (
    <Container>
      <div className="popOutContainer">
        {modal ? (
          <div className="popOut">
            <div className="popOutLeft">
              <img src={imageProduct} />
            </div>
            <div className="popOutRight">
              <div className="close" onClick={closePopOut}>
                <button>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <div className="detailProduct">
                <h2>{titleProduct}</h2>
                <p>{`ISBN : ${isbn}`}</p>
                <p>{descProduct}</p>
                <div className="desc">
                  <p>{`Tahun : ${publicationYearProduct}`}</p>
                  <p>{`Halaman : ${numPage}`}</p>
                  <p>{`Kondisi : ${conditionProduct}`}</p>
                  <p>{`Harga : ${priceProduct}`}</p>
                  <p>{`Penerbit : ${publisherName}`}</p>
                  <p>{`Bahasa : ${languageName}`}</p>
                </div>

                {/* <div className="category">
                  <p>Category : {categoryProduct}</p>
                </div> */}
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
          </div>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  .popOut {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 75vh;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    transition: all 5s ease-in-out;
  }

  .popOutLoading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 75vh;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    transition: all 5s ease-in-out;
    justify-content: center;
    align-items: center;

    .popOutLoadingInner {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #252936;
      border-radius: 20px;
      color: #feffff;
    }
  }

  .popOut .popOutLeft {
    width: 40%;
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
    width: 60%;
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
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.75rem;
      text-align: justify;
    }

    .desc {
      width: 100%;
      height: 50%;
      p {
        line-height: 0.5rem;
      }
    }
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
