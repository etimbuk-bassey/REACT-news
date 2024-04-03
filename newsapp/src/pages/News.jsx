/* eslint-disable react/prop-types */

import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import NewsList from "../components/NewsList";
import { useState } from "react";

function News() {
  const [category, setCategory] = useState(["general"]);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbar1 setCategory={setCategory} setSearchTerm={setSearchTerm} />
      <NewsList category={category} searchTerm={searchTerm} />
      <Footer />
    </>
  );
}

export default News;
