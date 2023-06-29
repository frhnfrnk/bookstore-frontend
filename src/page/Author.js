import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FunctionContext } from "../context/FunctionContext";
import Loading from "../component/Loading/loading";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Author() {
  const { author, functions, loading } = useContext(FunctionContext);
  const { fetchData, fetchAuthor } = functions;

  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (!status && author.length === 0) {
      fetchAuthor();
      setStatus(true);
    }
  }, [status]);

  useEffect(() => {
    if ((author.length = 0)) {
      setStatus(false);
    }
  }, [author]);

  return (
    <Container>
      <div>
        <Helmet>
          <title>Author</title>
        </Helmet>
        <div className="header">
          <h1 className="text-slate-700 text-3xl font-sans my-3">Author</h1>
          <div></div>
        </div>
        {author ? (
          <div className="relative flex flex-col w-full min-w-0 mb-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="p-0 overflow-x-auto">
              <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-700">
                <thead className="align-bottom">
                  <tr>
                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      ID
                    </th>
                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Author
                    </th>
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Book
                    </th>
                  </tr>
                </thead>
                {author.map((val, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <div className="flex px-2 py-1">{val.author_id}</div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <p className="mb-0 leading-tight">
                            {val.author_name}
                          </p>
                        </td>
                        <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                          <ul>
                            {val.books.map((val2, index) => {
                              return (
                                <li key={index} className="mb-0 leading-tight">
                                  {val2.title}
                                </li>
                              );
                            })}
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        ) : (
          <div>Tidak ada Author</div>
        )}

        {loading ? <Loading /> : null}
        <ToastContainer />
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

  .card.head{
    cursor: default;
    :hover {
        background-color: #252936;
    }
  }

  .card {
    margin: 10px;
    width: 100%;
    height: 50px;
    border: 3px solid #252936;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: #252936;

    :hover {
        background-color: #32a7e2;
        }


    .text {
      color: #feffff;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      text-align: center;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
      padding: 0 10px;

      .title {
        font-size: 10px;
        display: block;
        float: left;
        margin: 0;
        width: 50%;
        text-align: left;
      }

      .id {
        font-size: 10px;
        display: block;
        float: left;
        margin: 0;
        width: 25%;
        text-align: center;
      }



      }
    }
  }
`;
