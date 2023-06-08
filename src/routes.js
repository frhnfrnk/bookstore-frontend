import React from "react";

const Cart = React.lazy(() => import("./page/Cart"));
const Home = React.lazy(() => import("./page/Home"));
const Wishlist = React.lazy(() => import("./page/Wishlist"));
const Profil = React.lazy(() => import("./page/Profil"));
const Category = React.lazy(() => import("./page/Category"));
const Publisher = React.lazy(() => import("./page/Publisher"));
const Author = React.lazy(() => import("./page/Author"));
const Customer = React.lazy(() => import("./page/Customer"));
const Store = React.lazy(() => import("./page/Store"));
const History = React.lazy(() => import("./page/History"));
const Language = React.lazy(() => import("./page/Language"));
const Book = React.lazy(() => import("./page/Book"));
const addBook = React.lazy(() => import("./page/Addbook"));
// const Byusername = React.lazy(() => import('./views/menu/byusername/Byusername'))
// const ByTextSeacrh = React.lazy(() => import('./views/menu/bytextsearch/bytextsearch'))
// const DataVisualization = React.lazy(() => import('./views/pages/datavisualization/datavisualization'))
// const Wadas = React.lazy(() => import('./views/pages/datavisualization/wadas'))

const routes = [
  { path: "/home", name: "Home", element: Home },
  { path: "/cart", name: "Cart", element: Cart },
  { path: "/profil", name: "Profil", element: Profil },
  { path: "/wishlist", name: "Wishlist", element: Wishlist },
  { path: "/category", name: "Category", element: Category },
  { path: "/publisher", name: "Publisher", element: Publisher },
  { path: "/author", name: "Author", element: Author },
  { path: "/customer", name: "Customer", element: Customer },
  { path: "/store", name: "Store", element: Store },
  { path: "/history", name: "History", element: History },
  { path: "/language", name: "Language", element: Language },
  { path: "/language", name: "Language", element: Language },
  { path: "/book", name: "Book", element: Book },
  { path: "/addbook", name: "AddBook", element: addBook },
];

export default routes;
