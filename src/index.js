import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "styles/common.css";
import Board from "pages/Board";
import Post from "pages/Post";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Board />}></Route>
        <Route path="pages/Post" element={<Post />}></Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
